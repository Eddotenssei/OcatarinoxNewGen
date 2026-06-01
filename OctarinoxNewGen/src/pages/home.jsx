import OpenSourceInfo from "../component/openSourceInfo";
import OpenSourceLicensesInfo from "../component/openSourceLicensesInfo";
import CodeCards from "../component/CodeCards"

export default function Home() {
  return (
    <>
      <OpenSourceInfo />
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-60" />
      <OpenSourceLicensesInfo />
      <CodeCards/>
    </>
  );
}
