import { useEffect } from 'react';
import { WithAsyncReduxReducer } from '@/shared/lib/WithAsyncReduxReducer';
import { fetchProfile, getProfileData, profileReducer } from '@/entities/Profile';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { getUserAuthData } from '@/entities/User';
import { ProfileCard } from '@/entities/Profile/ui/ProfileCard/ProfileCard';
import { ProfileHeader } from '@/entities/Profile/ui/ProfileHeader';
import { PrivateRoute } from '@/features/PrivateRoute/PrivateRoute';

export default function ProfilePage() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserAuthData);
  const profileData = useAppSelector(getProfileData);

  useEffect(() => {
    if (user) {
      dispatch(fetchProfile(user.uid));
    }
  }, [user, dispatch]);

  return (
    <PrivateRoute isAvailable={!!user}>
      {/* @ts-ignore */}
      <WithAsyncReduxReducer reducers={{ profile: profileReducer }}>
        <ProfileHeader />
        <ProfileCard data={profileData} />
      </WithAsyncReduxReducer>
    </PrivateRoute>
  );
}
