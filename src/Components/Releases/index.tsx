import { ReleasesContainer, LastReleases, LastReleasesVideos, ReleaseVideo, LogoImg, NumberEp, ScrollableContainer } from './ReleasesStyles'; // Importe os estilos e o ícone
import SoloLeveling from '../../assets/solo.jpg';
import sousou from '../../assets/frieren0201.webp';
import overlord from '../../assets/filters_quality(95)format(webp).webp';
import tensei from '../../assets/tensei.webp';
import jujutsu from '../../assets/jujutsu.jpg';
import kageno from '../../assets/kageno.webp';
import mahouka from '../../assets/mahouka.webp';
import spy from '../../assets/spy.jpg';
import darlin from '../../assets/darlin.jpg';
import alo from '../../assets/maguschise.avif';
import fire from '../../assets/incendio.png';



const releases = [
  { title: "Solo Leveling", imgSrc: SoloLeveling, episode: "001" },
  { title: "Sousou no Frieren", imgSrc: sousou, episode: "002" },
  { title: "Overlord", imgSrc: overlord, episode: "003" },
  { title: "Tensei Shitara Slime", imgSrc: tensei, episode: "004" },
  { title: "Jujutsu Kaisen", imgSrc: jujutsu, episode: "005" },
  { title: "Kage no Jitsuryokusha", imgSrc: kageno, episode: "006" },
  { title: "Mahouka Koukou no Rettousei", imgSrc: mahouka, episode: "007" },
  { title: "Spy x Family", imgSrc: spy, episode: "008" },
  { title: "My dress up Darling", imgSrc: darlin, episode: "009" },
  { title: "The Ancient Magus' Bride", imgSrc: alo, episode: "010" },

];


const ReleaseCard = ({ title, imgSrc, episode }: { title: string, imgSrc: string, episode: string }) => (
  <ReleaseVideo>
  <LogoImg src={imgSrc} alt={`Logo ${title}`} />
  <h1>{title}</h1>
  <NumberEp>
    <p>EPISÓDIO</p>
    <p className='epi'>{episode}</p>
  </NumberEp>
</ReleaseVideo>
);

const Release = () => {
  return (
    <ScrollableContainer>

    <ReleasesContainer>
      {/* Descrição dos últimos lançamentos */}
      <LastReleases>
          <img className='fire' src={fire} alt="" />
        <p>Últimos Lançamentos</p>
      </LastReleases>

      {/* Lista de animes últimos lançamentos */}
      <LastReleasesVideos>
        {releases.map((release, index) => (
          <ReleaseCard key={index} {...release} />
        ))}
      </LastReleasesVideos>
    </ReleasesContainer>
    </ScrollableContainer>

  );
};

export default Release;
