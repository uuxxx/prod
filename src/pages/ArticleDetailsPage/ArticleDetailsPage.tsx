import { useAppSelector } from '@/shared/lib';
import { PrivateRoute } from '@/features/PrivateRoute/PrivateRoute';
import { getUserAuthData } from '@/entities/User';
import { ArticleDetails } from '@/entities/Article/ui/ArticleDetails';
import { useParams } from 'react-router-dom';

export default function ArticleDetailsPage() {
  const { id } = useParams();

  const user = useAppSelector(getUserAuthData);

  return (
    <PrivateRoute isAvailable={!!user}>
      <ArticleDetails id={id!} />
    </PrivateRoute>
  );
}
