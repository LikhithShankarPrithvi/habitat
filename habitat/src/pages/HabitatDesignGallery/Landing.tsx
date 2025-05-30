import React from 'react';





const Landing: React.FC = () => {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        <link
          id="stylesheet"
          rel="stylesheet"
          onLoad={() => {
            (document.getElementById('stylesheet') as HTMLLinkElement).rel = 'stylesheet';
          }}
          href="https://fonts.googleapis.com/css2?display=swap&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&amp;family=Spline+Sans%3Awght%40400%3B500%3B700"
        />
        <title>Stitch Design</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
      </head>
      <body>
        <div
          className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden"
          style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
        >
          <div className="layout-container flex h-full grow flex-col">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#283039] px-10 py-3">
              <div className="flex items-center gap-4 text-white">
                <div className="size-4">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                  habitat
                </h2>
              </div>
              <div className="flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                  <a className="text-white text-sm font-medium leading-normal" href="#">
                    notifications
                  </a>
                  <a className="text-white text-sm font-medium leading-normal" href="#">
                    about
                  </a>
                  <a className="text-white text-sm font-medium leading-normal" href="#">
                    contact
                  </a>
                </div>
              </div>
            </header>
            <div className="px-40 flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                  <div
                    className="bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-4 aspect-square"
                    style={{
                      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuByssw29m5gc21YHNzUmmbMHJbM7bAF3MDdwz4_8Du2WtXtWN5om6W0gsR7pCKRZvRzsD66iUSeVPI9IQmmnA0TPLfAFVfiiYd47dhNY_TJST3G3nF9Z1CEmwIvYagkkUjW6lWlGNjezyLOBRIDh7gg32tah-1HlkbpBnGZJIsxS8svF915j4UXRjXjvnlZNMcxRlditG6GSt1jV8NosS1kMlfoLPiShstY5z9m5c6NPihvxac9P7i0A90Ybqx7o0NHln1Yf3bOmxZG")`,
                    }}
                  >
                    <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">
                      Arena
                    </p>
                  </div>
                  <div
                    className="bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-4 aspect-square"
                    style={{
                      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZbXt8rCb30jjak-MnWatx-sRg1SzRvZILXL0NQ6ntU-zoF6kbM79E3hc8HgmpFx9AlwySXcaYe0yf0LpJmohxwMUTwbbfQi7piCcyamZL7yV-oTTO4N6XuB3j1wzE79PB3Uhes9miSMyiBvHvTYlypVPRcpvfKzIt-LGumSfWjs7SGOTag4e2pCBTXhu1c74uOIVGDMQeuk9qj7Bn92gdwWRJdkBImB_MWDwj_8ii8OQ979D10gix-wZjJDZyiMXtq5VfAaTZjo37");`,
                    }}
                  >
                    <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">
                      dashboard
                    </p>
                  </div>
                  <div
                    className="bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-4 aspect-square"
                    style={{
                      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRr9n7yudRRmKL80dFpk7W1NZCJqVbC8J1tv0jfjEOeUXxjoj_8HWHQ5bg52-2MVTqEKqQsHJi0Zy14tYoh4fNhyzbc_CTy5b_kleTPwXZ0bcZAR_J5lt7lwFhujZOurutqjMXKLmsqhAx4QtCRT0di_eRNG1TgH7f6kIzRKeCdzzirog-YIWsCP46ZKAVMrMfeXSqTkngwhNN6RF4rl8HeHFtHO2PCic2KBittUxjqe_Ab4Ux3uw5-GTqliq86txNQLXbRVEi_mvr");`,
                    }}
                  >
                    <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">
                      settings
                    </p>
                  </div>
                  <div
                    className="bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-4 aspect-square"
                    style={{
                      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDsNuMsXlCl-5Mc9ZpQNG82AmR0FSeQMalrVoSReohGuwSMBIIN6lrzfdngvc9MX00AzzOlh3i-esIoH7bGdVs9xAIFNFdW8qj2bNKmG61_TxPDdCDFnf2TgEGLNQYvzaUKEP0P_-gNAlwPn_Kjh8Yy29dvtPFJDm_fcQ0r1iIjvt9had60AmAY-uADJXCYKgqqG_w7w4R9aeSV1g0aZ4pK7Bab48tdUsnd3hUS7Dp25blaO4zk0-rijgoqX8rZQEW7xfqxuLB-GJ3N");`,
                    }}
                  >
                    <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">
                      +
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Landing;
