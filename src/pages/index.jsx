import opened from "@/../../public/assets/opened.jpg";
import closed from "@/../../public/assets/closed.jpg";
import knock from "@/../../public/sounds/knock.mp3";
import unlocked from "@/../../public/sounds/unlocked.mp3";
import { useEffect, useRef, useState } from "react";
import Img from "@/components/img";
import Text from "@/components/text";

export default function Home() {
  const [isClosed, setIsClosed] = useState(1);
  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const knockRef = useRef();
  const unlockedRef = useRef();

  const ToggleDoor = () => {
    if (count < 10) {
      knockRef.current.play();
      console.log(`knock...`);
      setCount(count + 1);
    } else {
      unlockedRef.current.play();
      isClosed ? setIsClosed(0) : setIsClosed(1);
    }
  };

  return (
    <div className="h-screen bg-white flex flex-col justify-center items-center p-[30px]">
      {count < 10 ? (
        <Text text={`Ta ${count} удаа тогшсон байна.`} />
      ) : (
        <Text text={`Ta амжилттай хаалга онгойлголоо.`} />
      )}

      <audio ref={knockRef} src={knock} />
      <audio ref={unlockedRef} src={unlocked} />
      <div className="mb-[30px]"></div>
      {isClosed ? (
        <Img src={closed.src} func={() => ToggleDoor()} />
      ) : (
        <Img src={opened.src} func={() => ToggleDoor()} />
      )}
    </div>
  );
}
