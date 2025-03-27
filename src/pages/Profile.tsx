import React, { useContext, useState, useEffect } from 'react';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, 
  IonButton, IonItem, IonLabel, IonSpinner 
} from '@ionic/react';
import { ProfileContext } from '../context/ProfileContext';
import '../theme/formStyles.css'; 

const Profile: React.FC = () => {
  const profileContext = useContext(ProfileContext);

  if (!profileContext) {
    return (
      <IonContent>
        
      </IonContent>
    );
  }

  const { profile, updateProfile } = profileContext;
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (profile) {
      setName(profile.name || ''); // Set default or empty
      setAge(profile.age ? profile.age.toString() : ''); // Convert number to string for input
    }
    setLoading(false);
  }, [profile]);

  const handleSave = async () => {
    await updateProfile({ name, age: Number(age) });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="form-container">
        {loading ? (
          <IonSpinner name="crescent" />
        ) : (
          <div  className="form">
            <div className="form-group">
              <label>Name</label>
              <IonInput
                value={name}
                onIonChange={(e) => setName(e.detail.value!)}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Age</label>
              <IonInput
                type="number"
                value={age}
                onIonChange={(e) => setAge(e.detail.value!)}
                placeholder="Enter age"
              />
            </div>

            <IonButton className="form-button" expand="full" onClick={handleSave}>
              Save Profile
            </IonButton>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Profile;
