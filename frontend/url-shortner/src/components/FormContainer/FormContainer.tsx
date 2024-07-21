import * as React from "react";
import axios from "axios";
import { serverUrl } from "../../helpers/Constants";

interface IFormContainerProps {
    updateReloadState: ()=> void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const { updateReloadState } = props;

  const [fullUrl, setFullUrl] = React.useState<string>("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/shortUrl`, {
        fullUrl: fullUrl,
      });
      setFullUrl("");
      updateReloadState();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mx-auto p-2">
        <div className="bg-slate-100 my-8 rounded-xl bg-cover bg-center">
          <h2 className="text-black text-4xl text-center pb-4">URLSHORTNER</h2>
          <p className="text-black text-center pb-2 text-xl font-extralight">
            Paste your Link to Shorten it. <span className="wave">👋</span>
          </p>
          <p className="text-black text-center pb-4 text-sm font-thin">
            Free tool to shorten a URL or reduce Link
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-200">
                  urlshortner.link /
                </div>
                <input
                  type="text"
                  placeholder="Add Link Here"
                  required
                  className="block w-full p-4 ps-32 text-sm text-gray-300 border border-gray-300 rounded-lg bg-black focus:ring-blue-500 focus:border-blue-300"
                  value={fullUrl}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFullUrl(e.target.value)
                  }
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-black bg-blue-600 rounded-lg border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200"
                >
                  Shorten URL
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormContainer;
