import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className="bg-slate-700 text-white text-base text-center py-5">
      URLShorter|Hrushabh Patade
    </div>
  );
};

export default Footer;
