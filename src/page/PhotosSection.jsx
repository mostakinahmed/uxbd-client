import React from "react";

const photos = [
  {
    id: 1,
    title: "হিমসাগর /খিসরাপাত",
    image:
      " https://7vgva7cju0vcfvwf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-26%20at%203.34.55%20PM.jpeg",
  },
  {
    id: 2,
    title: "হিমসাগর /খিসরাপাত",
    image:
      "https://7vgva7cju0vcfvwf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-26%20at%203.34.55%20PM%20%281%29.jpeg",
  },
  {
    id: 3,
    title: "হিমসাগর /খিসরাপাত",
    image:
      "https://7vgva7cju0vcfvwf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-26%20at%203.34.56%20PM%20%281%29.jpeg",
  },
  {
    id: 4,
    title: "গোপালভোগ",
    image:
      "https://7vgva7cju0vcfvwf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-26%20at%203.34.56%20PM.jpeg",
  },
  {
    id: 5,
    title: "গোপালভোগ",
    image:
      "https://7vgva7cju0vcfvwf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-26%20at%203.34.56%20PM%20%282%29.jpeg",
  },
];

export default function PhotosSection() {
  return (
    <div className=" bg-gray-100 md:p-4 p-2">
     <section className="w-full mx-auto bg-white shadow-sm border border-gray-200 md:p-4 p-2 overflow-hidden">
  
  {/* Header */}
  <div className="flex items-center justify-center mb-3">
    <h2 className="text-2xl font-bold text-gray-800">
      আমের তালিকা
    </h2>
  </div>

  {/* Desktop Grid */}
  <div className="hidden lg:grid grid-cols-5 gap-3">
    {photos.map((photo) => (
      <div
        key={photo.id}
        className="group bg-white rounded overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300"
      >
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={photo.image}
            alt={photo.title}
            className="w-full h-68 object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* Title */}
        <div className="p-4">
          <h3 className="text-md font-semibold text-gray-700 text-center">
            {photo.title}
          </h3>
        </div>
      </div>
    ))}
  </div>

  {/* Mobile Slider */}
  <div className="lg:hidden flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2">
    {photos.map((photo) => (
      <div
        key={photo.id}
        className="min-w-[240px] snap-center bg-white rounded overflow-hidden border border-gray-200 shadow-sm"
      >
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={photo.image}
            alt={photo.title}
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Title */}
        <div className="p-2">
          <h3 className="text-sm font-semibold text-gray-700 text-center">
            {photo.title}
          </h3>
        </div>
      </div>
    ))}
  </div>
</section>


    </div>
  );
}