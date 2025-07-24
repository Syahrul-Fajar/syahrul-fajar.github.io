import ProfileCard from './ProfileCard'
  
<ProfileCard
  name="Syahrul Fajar"
  title="Full Stack Web Developer"
  handle="syahrulfajar"
  status="Online"
  contactText="Contact Me"
  avatarUrl="/profile.png"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={() => console.log('Contact clicked')}
/>