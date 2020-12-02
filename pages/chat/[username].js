import Chat from '../chat';
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  const { username } = router.query
  return <Chat room={username} />;
}
