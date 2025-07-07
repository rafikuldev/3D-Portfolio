import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    // "auth0",
    // "blazor",
    // "cplusplus",
    // "csharp",
    // "microsoft",
    // "sqlite",
    // "dotnet",
    // "dotnetcore",
    "wordpress",
    "php",
    "react",
    "laravel",
    "javascript",
    "html5",
    "vitejs",
    "css3",
    "tailwindcss",
    "git",
  ];

  // const skills = [
  //   'html', // ওয়েবের বেসিক
  //   'css', // স্টাইলিং এর জন্য
  //   'javascript', // ফ্রন্টএন্ড লজিকের জন্য
  //   'react', // জনপ্রিয় ফ্রন্টএন্ড ফ্রেমওয়ার্ক
  //   'laravel', // পিএইচপি ব্যাকএন্ড ফ্রেমওয়ার্ক
  //   'nodejs', // জাভাস্ক্রিপ্ট ব্যাকএন্ড (যদি ব্যবহার করো)
  //   'mysql', // ডাটাবেস (অথবা "mongodb" যদি NoSQL ব্যবহার করো)
  //   'git', // ভার্সন কন্ট্রোল
  //   'bootstrap', // CSS ফ্রেমওয়ার্ক
  //   'tailwind', // আধুনিক CSS ইউটিলিটি ফ্রেমওয়ার্ক
  // ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
