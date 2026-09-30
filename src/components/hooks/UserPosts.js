// Ex13 - Lay bai viet theo userId, fetch lai khi userId doi
import { useEffect, useState } from 'react';
import { Alert, ListGroup, Spinner } from 'react-bootstrap';
import { POSTS_API } from '../../data/hooks';

function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true; // co de bo qua response cu ve cham
    setLoading(true);
    setError(null);

    async function load() {
      try {
        const res = await fetch(`${POSTS_API}?userId=${userId}`);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        if (active) setPosts(data);
      } catch (err) {
        if (active) setError(err.message);
      } finally {
        if (active) setLoading(false);
      }
    }

    load();

    // cleanup: chay truoc lan effect ke tiep (khi userId doi) hoac khi unmount
    return () => {
      active = false;
    };
  }, [userId]); // userId doi => chay lai effect

  if (loading) {
    return (
      <div className="d-flex align-items-center gap-2">
        <Spinner animation="border" size="sm" /> Đang tải...
      </div>
    );
  }

  if (error) return <Alert variant="danger">Lỗi: {error}</Alert>;

  return (
    <ListGroup>
      {posts.map((p) => (
        <ListGroup.Item key={p.id}>
          <strong>#{p.id}</strong> {p.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default UserPosts;
