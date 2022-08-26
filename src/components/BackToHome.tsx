import { Link } from 'gatsby';

export function BackToHome({ className }: { className?: string }) {
  return (
    <Link className={className} to="/">
      <ion-icon class="mr-2" name="home"></ion-icon>
      Back to home
    </Link>
  );
}
