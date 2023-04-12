export const TickItem = ({ children }) => {
  return (
    <div className="relative mt-5 py-4 px-2">
      <div className="absolute top-0 left-1/2 w-4 ml-[-8px] h-full rounded-full bg-gradient-to-b from-darkPurple to-charcoal">
        <div className="sticky top-1/2">
          <div className="relative h-4 w-4">
            <div className="absolute h-4 w-4 animate-ping rounded-full bg-ghostWhite opacity-75"></div>
            <div className="bg-soap rounded-full relative h-4 2-4"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
        </div>
        <div>
          <h4 className="font-heading p-2 bg-soap my-4">
            2022
          </h4>
        </div>
        <div className="text-right">
          <div className="font-bold">Jaarverslag</div>
          <div className="trext-zinc-400">Download Pdf</div>
        </div>
        <div></div>
        <div></div>
        <div className="text-let">
          <div className="font-bold">Jaarrekening</div>
          <div className="trext-zinc-400">Download Pdf</div>
        </div>
        <div>
          <h4 className="font-heading p-2 bg-soap my-4">
            2021
          </h4>
        </div>
        <div></div>
        <div className="text-right">
          <div className="font-bold">Jaarverslag</div>
          <div className="trext-zinc-400">Download Pdf</div>
        </div>
        <div></div>
        <div></div>
        <div className="text-let">
          <div className="font-bold">Jaarrekening</div>
          <div className="trext-zinc-400">Download Pdf</div>
        </div>
      </div>
    </div>
    // <div className="grid grid-cols-[50px_1fr] gap-3">
    //   <div className="text-3xl text-green-500 flex justify-center">
    //     <FaFileDownload size={20}/>
    //   </div>
    //   <div className="hover:underline">
    //     {children}
    //   </div>
    // </div>
  );
};