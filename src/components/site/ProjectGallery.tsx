import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PortfolioImage } from "@/data/projects";

export function ProjectGallery({ images, name }: { images: PortfolioImage[]; name: string }) {
  const [active, setActive] = useState<number | null>(null);
  const image = active === null ? undefined : images[active];
  function move(delta: number) {
    setActive(value => value === null ? null : (value + delta + images.length) % images.length);
  }
  return (
    <Dialog.Root open={active !== null} onOpenChange={open => { if (!open) setActive(null); }}>
      <div className="grid gap-6 sm:grid-cols-2">
        {images.map((item, index) => (
          <Button key={item.src} variant="ghost" className="group relative h-auto w-full overflow-hidden p-0 hover:bg-transparent" onClick={() => setActive(index)} aria-label={`Open ${name}, image ${index + 1}`}>
            <img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" className="aspect-video w-full bg-muted object-contain" />
            <span className="absolute bottom-3 right-3 bg-background/90 p-2 text-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"><ZoomIn aria-hidden="true" /></span>
          </Button>
        ))}
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/80" />
        <Dialog.Content aria-describedby={undefined} className="fixed inset-4 z-50 flex flex-col bg-background p-4 sm:inset-8 sm:p-6" onKeyDown={event => { if (event.key === "ArrowLeft") move(-1); if (event.key === "ArrowRight") move(1); }}>
          <div className="flex items-center justify-between gap-4">
            <Dialog.Title className="text-xl">{name}</Dialog.Title>
            <Dialog.Close asChild><Button variant="ghost" size="icon" aria-label="Close gallery" title="Close gallery"><X /></Button></Dialog.Close>
          </div>
          {image && <img src={image.src} alt={image.alt} width={image.width} height={image.height} className="my-4 min-h-0 w-full flex-1 object-contain" />}
          <div className="flex items-center justify-center gap-6">
            <Button variant="ghost" size="icon" onClick={() => move(-1)} aria-label="Previous image" title="Previous image"><ArrowLeft /></Button>
            <p className="text-sm text-muted-foreground">{active === null ? 0 : active + 1} / {images.length}</p>
            <Button variant="ghost" size="icon" onClick={() => move(1)} aria-label="Next image" title="Next image"><ArrowRight /></Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}