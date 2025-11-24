import GraduationCapUrl from '~/assets/icons/graduation-cap.svg';

export default function AboutMe() {
  return (
    <>
      <h1 className="text-white font-bold text-5xl mb-10">About Me</h1>
      <p className="text-white text-2xl mb-20 font-light">
        I code to bring ideas to life.
      </p>
      <div className="flex">
        <img
          src={GraduationCapUrl}
          width={32}
          height={32}
          alt="Graduation cap"
        />
        <div className="flex flex-col items-start">
          <p className="text-white ml-3 font-bold mb-1">
            The University of Sydney
          </p>
          <p className="text-white ml-3 font-light">
            Bachelor of Advanced Computing
          </p>
          <p className="text-white ml-3 font-light">
            Software Development and Physics
          </p>
          <p className="text-white ml-3 font-light">80.98 WAM</p>
        </div>
      </div>
    </>
  );
}
