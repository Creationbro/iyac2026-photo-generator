"use client";

import { useRef, useEffect } from "react";
import Moveable from "react-moveable";

interface MoveablePhotoProps {
  target: HTMLDivElement | null;
}

export default function MoveablePhoto({
  target,
}: MoveablePhotoProps) {
  const moveableRef = useRef<Moveable>(null);

  useEffect(() => {
    if (!target) return;

    target.style.transform =
      "translateX(-50%) translate(0px,0px) scale(1)";
  }, [target]);

  return (
    <Moveable
      ref={moveableRef}
      target={target}
      draggable={true}
      scalable={true}
      keepRatio={true}
      origin={false}
      throttleDrag={0}
      throttleScale={0}
      renderDirections={[
        "nw",
        "ne",
        "sw",
        "se",
      ]}
      onDrag={({ target, transform }) => {
        target.style.transform = transform;
      }}
      onScale={({ target, drag }) => {
        target.style.transform = drag.transform;
      }}
    />
  );
}