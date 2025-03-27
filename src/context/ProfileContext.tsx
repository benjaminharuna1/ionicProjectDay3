import React, { createContext, useState, useEffect } from 'react';
import { Storage } from '@ionic/storage';

interface Profile {
  name: string;
  age: number;
}

interface ProfileContextType {
  profile: Profile;
  updateProfile: (newProfile: Profile) => void;
}

export const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

const storage = new Storage();
storage.create(); // Ensure storage is initialized

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<Profile>({ name: '', age: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      await storage.create(); // Ensure storage is ready
      const storedName = await storage.get('name');
      const storedAge = await storage.get('age');

      if (storedName && storedAge) {
        setProfile({ name: storedName, age: Number(storedAge) });
      } else {
        // No data found, set empty values for user input
        setProfile({ name: '', age: 0 });
      }

      setLoading(false);
    };

    loadProfile();
  }, []);

  const updateProfile = async (newProfile: Profile) => {
    await storage.set('name', newProfile.name);
    await storage.set('age', newProfile.age.toString()); // Convert age to string for storage
    setProfile(newProfile);
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {!loading && children}
    </ProfileContext.Provider>
  );
};
