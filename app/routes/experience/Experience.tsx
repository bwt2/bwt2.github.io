import linkSvgUrl from '~/assets/icons/external-link.svg';
import { experiences } from './ExperienceData';

export default function Experience() {
  const formatDate = (d: Date | null) => {
    if (!d) return 'Present';
    return d.toLocaleString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-white font-bold text-5xl mb-10">Experience</h1>

      <main className="relative w-3/4 lg:w-3/10">
        {/* vertical gradient line */}
        <div className="absolute top-0 h-full w-0.5 bg-[linear-gradient(transparent,white,transparent)] -translate-x-1/2"></div>

        <ol className="flex flex-col gap-20">
          {experiences.map((data, index) => (
            <li key={index} className="relative flex items-start">
              {/* Number diamond */}
              <div className="absolute -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-[#15273a] border border-white rotate-45 flex items-center justify-center text-white text-xl translate-y-1/2">
                  <span className="-rotate-45 text-2xl font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="ml-[15%] text-white space-y-1">
                <h2 className="font-semibold text-xl flex">
                  {data.company}
                  {data.href && (
                    <a
                      href={data.href}
                      target="_blank"
                      className="ml-2 flex items-center shrink-0"
                    >
                      <img
                        src={linkSvgUrl}
                        className="w-4 h-4 opacity-75 shrink-0"
                        alt="Link icon"
                      />
                    </a>
                  )}
                </h2>
                <p className="text-gray-300">{data.title}</p>

                <p className="text-gray-400 text-sm">
                  {formatDate(data.startDate)} - {formatDate(data.endDate)} ☆{' '}
                  {data.location}
                </p>

                {/* Bullet points */}
                {data.bulletPoints && data.bulletPoints.length > 0 && (
                  <ul className="mt-3 space-y-1 list-disc text-gray-300 pl-5">
                    {data.bulletPoints.map((point, i) => (
                      <li key={i} className="mb-2">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
