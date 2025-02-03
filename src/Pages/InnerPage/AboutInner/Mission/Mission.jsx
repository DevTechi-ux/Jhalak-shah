import MissionCard from './MissionCard';
import missionIcon from '/images/m-icon2.png';
import missionIcon2 from '/images/m-icon.png';

const MissionData = [
  {
    id: 1,
    missionIcon: missionIcon,
    missionTitle: 'Our Mission',
    missionDesc: 'At Rajnayan Clinic, we are dedicated to providing exceptional dental and cosmetic laser treatments tailored to your unique needs. Our mission is to enhance your oral health and aesthetic appearance through advanced technology and compassionate care.',
  },  {
    id: 2,
    missionIcon: missionIcon2,
    missionTitle: 'Our Story',
    missionDesc: 'Founded with a vision to redefine dental and cosmetic care, Rajnayan Clinic has grown into a trusted name in Bhopal. Our journey is marked by a commitment to excellence, continuous learning, and a passion for delivering results that exceed expectations.',
  },  {
    id: 3,
    missionIcon: missionIcon,
    missionTitle: 'Our Values',
    missionDesc: '*Compassionate Care:* We treat every patient with kindness and respect, ensuring a comfortable and welcoming environment. \n *Innovation:* Embracing the latest advancements in dental and cosmetic laser technology to provide effective and efficient treatments. \n *Integrity:* Upholding the highest ethical standards in all our services, fostering trust and transparency.',
  },
];


const Mission = () => {
  return (
    <section className='bg-BodyBg-0'>
      <div className='Container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-center'>
          {MissionData.map(({ id, missionIcon, missionTitle, missionDesc }) => {
            return (
              <div
                key={id}
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <MissionCard
                  missionIcon={missionIcon}
                  missionTitle={missionTitle}
                  missionDesc={missionDesc}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mission;
