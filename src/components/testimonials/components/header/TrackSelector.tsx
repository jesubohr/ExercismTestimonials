import { useEffect, useState } from 'react'
import { Menu, RadioGroup, Transition } from '@headlessui/react'
import { ReactComponent as AllTracksIcon } from '@/assets/AllTracksIcon.svg'
import { ReactComponent as LanguageIcon } from "@/assets/buttonIcons/Language.svg"
import { useOptions } from '@/hooks/useTestimonialOption'
import { TRACKS_URL } from '@/services/API'

export function TrackSelector() {
  const { totalTracks, onTrackChange } = useOptions()

  const [tracks, setTracks] = useState({})
  const [trackTitles, setTrackTitles] = useState<string[]>([])
  const [selectedTrack, setSelectedTrack] = useState('all')

  function handleTrackChange(track: string) {
    setSelectedTrack(track)
    onTrackChange(track)
  }

  async function fetchTrackTitle(slug: string) {
    const response = await fetch(`${TRACKS_URL}/${slug}`)
    if (!response.ok) return slug
    const data = await response.json()
    return data?.track.language
  }
  useEffect(() => {
    const fetchTracks = async () => {
      const trackTitles = await Promise.all<string>(
        Object
          .keys(totalTracks)
          .map(async (slug) => {
            return await fetchTrackTitle(slug)
          })
      )
      setTrackTitles(trackTitles)
    }

    setTracks(totalTracks)
    fetchTracks()
  }, [totalTracks])

  return (
    <Menu as="div" className="relative z-10">
      {({ open }) => (
        <>
          <Menu.Button
            tabIndex={1}
            className={`w-full rounded-md pr-0.5 py-0.5 ring-1 ring-transparent focus-within:ring-[#2E57E8] focus:outline-none focus-within:shadow-selector ${open && 'ring-[#2E57E8] bg-white'}`}
          >
            <LanguageIcon />
          </Menu.Button>
          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute mt-3 left-0 p-2 w-94 max-h-91 border-2 bg-white rounded-lg shadow-container overflow-y-auto">
              <RadioGroup value={selectedTrack} onChange={handleTrackChange}>
                <Tracks tracks={tracks} titles={trackTitles} />
              </RadioGroup>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

type TracksProps = {
  tracks: { [key: string]: number }
  titles: string[]
}
function Tracks({ tracks, titles }: TracksProps) {
  const totalCount = Object.values(tracks).reduce((acc, curr) => acc + Number(curr), 0)

  return (
    <>
      <TrackItem title="All" slug="all" count={totalCount} />
      {
        Object.entries(tracks).map(([slug, count], index) => (
          <TrackItem
            key={index}
            title={titles[index]}
            slug={slug}
            count={Number(count)}
          />
        ))
      }
    </>
  )
}

type TrackItemProps = {
  title: string
  slug: string
  count: number
}
function TrackItem({ title, slug, count }: TrackItemProps) {
  return (
    <Menu.Item>
      <RadioGroup.Option
        value={slug}
        className={
          ({ checked }) => `flex justify-between items-center py-2 px-6 h-[58px] hover:bg-[#F0F3F9] ${checked && 'bg-[#F0F3F9]'} cursor-pointer`
        }>
        {({ checked }) => (
          <>
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center mr-2 p-[5px] w-[21px] h-[21px] bg-white border border-[#5C5589] rounded-full">
                {
                  checked && (<div className="w-[9px] h-[9px] bg-[#3F3A5A] rounded-full"></div>)
                }
              </div>
              <TrackIcon slug={slug} title={title} />
              <span className="text-[#3D3B45] font-medium">{title}</span>
            </div>
            <span className={
              "flex justify-center items-center py-[3px] px-3 min-w-11 h-8 border rounded-full font-medium " +
              `${checked ? 'border-[#6A6781] text-label-default' : 'border-[#A9A6BD] text-label-secondary'}`
            }>{count}</span>
          </>
        )}
      </RadioGroup.Option>
    </Menu.Item>
  )
}

function TrackIcon({ slug, title }: { slug: string, title: string }) {
  if (slug === 'all') return <AllTracksIcon />
  return (
    <img className="w-11 h-11" src={`https://dg8krxphbh767.cloudfront.net/tracks/${slug}.svg`} alt={title} />
  )
}
