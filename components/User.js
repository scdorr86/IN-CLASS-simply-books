import { useAuth } from '../utils/context/authContext';

export default function User() {
  const { user } = useAuth();

  return (
    <div>user: {user.image}{user.name}{user.email}{user.metadata.lastSignInTime}</div>
  );
}
