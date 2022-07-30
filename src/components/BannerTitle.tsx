import { ReactComponent as TitleIcon } from '@/assets/titleIcon/TitleIcon.svg';
import { ReactComponent as WaveIcon } from '@/assets/titleIcon/WaveIcon.svg';

export function BannerTitle() {
  return (
    <section className="flex flex-col items-center gap-3 mt-10 px-40 min-w-max">
      <TitleIcon />
      <div className="flex items-center gap-4">
        <h1 className="text-3xl text-label-default font-bold">Testimonials I've left</h1>
        <p className="py-1 px-3 border border-[#CBC9D9] rounded-full text-label-secondary">47</p>
      </div>
      <WaveIcon className="mt-1" />
    </section>
  );
}
