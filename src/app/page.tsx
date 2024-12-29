import React from 'react';
import ProfilePic from '@/components/profilepic/ProfilePic';
import FilmRoll from '../components/filmroll/FilmRoll'; // Import FilmRoll component

const Home: React.FC = () => {
  return (
    <div className={"container"}>
      <ProfilePic />
      <h1 className={"nameTitle"}>Zach Gonzales</h1>
      <p className={"description"}>
        Hi, I'm Zach Gonzales, I enjoy surfing, climbing, and backpacking!
        I'm a 3rd year currently attending Cal Poly SLO. If you have any
        questions, please contact me at ZachVGonzales@gmail.com.
      </p>

      {/* Include FilmRoll Components */}
      <FilmRoll
        images={['/5522e32b-01ed-441e-af72-7c9d370b1691.JPG', '/IMG_0026.jpg', '/IMG_0048.JPG', '/IMG_0255.JPG', '/8402d9bd-6cab-44d8-be80-bc63038f1797.JPG', '/c3a5ba69-14b8-4ac3-8a7e-6e29721bfc65.JPG', '/IMG_0432.png', '/IMG_0508.PNG', '/IMG_0515.PNG', '/IMG_0548.png', '/IMG_1482.png', '/IMG_2079.png', '/IMG_2230.png', '/IMG_2245.png', '/IMG_2326.png', '/IMG_2716.jpg', '/IMG_2717.JPG']}
        side="left"
      />
      <FilmRoll
        images={['/IMG_0026.jpg', '/IMG_0508.PNG', '/IMG_0515.PNG', '/IMG_5394.JPG', '/IMG_5153.JPG', '/IMG_5125.png', '/IMG_3652.jpg', '/IMG_3576.png', '/IMG_3524.png', '/IMG_3238.png', '/IMG_3211.png', '/IMG_3190.png']}
        side="right"
      />
    </div>
  );
};

export default Home;