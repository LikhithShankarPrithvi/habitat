import React from 'react';

const Welcome: React.FC = () => {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link
          rel="stylesheet"
          as="style"
          //   onLoad="this.rel='stylesheet'"
          href="https://fonts.googleapis.com/css2?display=swap&amp;family=Manrope%3Awght%40400%3B500%3B700%3B800&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
        />
        <title>Stitch Design</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
      </head>
      <body>
        <div
          className="relative flex size-full min-h-screen flex-col bg-[#162013] dark group/design-root overflow-x-hidden"
          style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
        >
          <div className="layout-container flex h-full grow flex-col">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2e4328] px-10 py-3">
              <div className="flex items-center gap-4 text-white">
                <div className="size-4">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                  Habitat
                </h2>
              </div>
              <div className="flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                  <a className="text-white text-sm font-medium leading-normal" href="#">
                    Home
                  </a>
                  <a className="text-white text-sm font-medium leading-normal" href="#">
                    Features
                  </a>
                  <a className="text-white text-sm font-medium leading-normal" href="#">
                    Pricing
                  </a>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#53d22c] text-[#162013] text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Get Started</span>
                </button>
              </div>
            </header>
            <div className="px-40 flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="@container">
                  <div className="@[480px]:p-4">
                    <div
                      className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSlV7vn1KnHY4roMeihJVjHryKIMbKydUUjtR1hPee6Mn8gfcL6mgZIAh_STs0O_y0s5jY3GH1-5xDRAxzgsKPEW7r340qDcpTJwBNA2AoACS1l4-1VVrAhd1YOrmmqMBK3Qco4ewLv7Q-Owug4TH99LaCTSFD4yxU8c8YTrbyaoOQzqpJt7g9FIbhewUOQ_jizj6p5VQuxwNx9tl9PYh4h02PGk0aKR5wCzhIUaefaLpzzObhlD5orh7ZNty8jLSL1VoBNTbYjAaa");',
                      }}
                    >
                      <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                          Build habits together, one task at a time
                        </h1>
                        <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                          Habitat is a gamified task tracker for two people. Earn XP when your
                          partner completes tasks, blending daily habit tracking with social
                          dynamics and gamification.
                        </h2>
                      </div>
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#53d22c] text-[#162013] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                        <span className="truncate">Get Started</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-10 px-4 py-10 @container">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                      Track progress and earn rewards
                    </h1>
                    <p className="text-white text-base font-normal leading-normal max-w-[720px]">
                      Set goals, track progress, and interact with your accountability partner. Earn
                      XP when your partner completes tasks, fostering mutual accountability and
                      motivation.
                    </p>
                  </div>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
                    <div className="flex flex-col gap-3 pb-3">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBsMQOPTQb1qe3p_GGvTL6NGTg_zM9n9s-0lg_CbUkiPombYYUvDLQ6zhfUcrGjE5TPZhoPmO2WvWuaJJcIhqC_p4nrXaPiNq-nsq4CRt7lUgTb1ZOPv4sPSdurlB6rFhiY2N5WIR7S1v0lxgaMJ2Il6QT68AKo_Wpw6GN-RYnxGCwuKVt63l8GKkEhxi-fWv6TlGDwPSEmxLzqtM7i14vZ7GVNb10_brX59RSVtOcglk09f625dPq0eihUZj9OSBVchmIbwxb2qcB1");',
                        }}
                      ></div>
                      <div>
                        <p className="text-white text-base font-medium leading-normal">
                          Progress Tracking
                        </p>
                        <p className="text-[#a2c398] text-sm font-normal leading-normal">
                          Visualize your progress with intuitive tracking tools.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDf-WBoqTxhsc2Zk6eTH9-Bu2sjUmv-lcdmiQQ0ZG_-n3SEQAF-qdsdvvixVJLvPxkKy24xTD6V0WuECqB7pOdF7MG7lJ0v8hwDNPoVOfbr5ic6SUdrKIjoHedC9gPFg5oTjjo83PHOqFO7JTXh9oQE6V8EFHMpq6Vts0ZkrEC4SZGAb9d_dG7wOyUlXi_ZFw4PoQZw2PhXNIdww7gMfRBND-BjHnqp_eRk6RwO0_-V-qHn6ubg5irce--BPL0QJJoWljlXQ5VLmLt1");',
                        }}
                      ></div>
                      <div>
                        <p className="text-white text-base font-medium leading-normal">
                          Collaboration
                        </p>
                        <p className="text-[#a2c398] text-sm font-normal leading-normal">
                          Collaborate with your partner to achieve shared goals.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8CkmuXS-BUa6U20zehraF7iulpKPSdFv28GLHrmbCjy7IPsiNIINN4mwRwtMGpYBySl8hMH86tXyV40msACdf2it2TZiVu-kUfEY3fnQiYoisdQVyXrFH30H6LspIVOrVbC2jntp-q8fIEx-SbFU9FQ4o1BJ6NjsjkGU6jS7IPpAiy_hcjDXbTC7yIKixZLw5pgMOPcQRqxvPuc4hb_NxLk5U-AQ9UfrCLLrtMGIXJW5EUGYbUzibbUTrUJJN97ooCBR6TkPnc_Ij");',
                        }}
                      ></div>
                      <div>
                        <p className="text-white text-base font-medium leading-normal">Rewards</p>
                        <p className="text-[#a2c398] text-sm font-normal leading-normal">
                          Earn rewards and celebrate milestones together.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="flex justify-center">
              <div className="flex max-w-[960px] flex-1 flex-col">
                <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
                  <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                    <a
                      className="text-[#a2c398] text-base font-normal leading-normal min-w-40"
                      href="#"
                    >
                      Terms of Service
                    </a>
                    <a
                      className="text-[#a2c398] text-base font-normal leading-normal min-w-40"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </div>
                  <p className="text-[#a2c398] text-base font-normal leading-normal">
                    @2024 Habitat. All rights reserved.
                  </p>
                </footer>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Welcome;
