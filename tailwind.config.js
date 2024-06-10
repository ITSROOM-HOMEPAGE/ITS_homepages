/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mainPage2_bg: "url('./assets/mainPage2_bg.png')",
      },
    },
    fontFamily: {
      PretendBlack: ["Pretendard-Black"],
      PretendBold: ["Pretendard-Bold"],
      PretendExtraBold: ["Pretendard-ExtraBold"],
      PretendExtraLight: ["Pretendard-ExtraLight"],
      PretendLight: ["Pretendard-Light"],
      PretendMedium: ["Pretendard-Medium"],
      PretendRegular: ["Pretendard-Regular"],
      PretendSemiBold: ["Pretendard-SemiBold"],
      PretendThin: ["Pretendard-Thin"],
    },
  },
  plugins: [],
};
