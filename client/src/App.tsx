import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ClipboardIcon,
  CheckIcon,
  LinkIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import { Button } from '@material-tailwind/react';
import { useCopyToClipboard } from 'usehooks-ts';
// import axios from 'axios';

function App() {
  const [longUrl, setLongUrl] = useState<string>('');
  const [shortUrl, setShortUrl] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isNewLink, setIsNewLink] = useState<boolean>(false);

  const [, copy] = useCopyToClipboard();

  const [copied, setCopied] = useState(false);

  const fetchShortUrl = async () => {
    console.log('Shorten URL', shortUrl);
    setLoading(true);

    if (!validateUrl(longUrl)) {
      setLoading(false);
      alert('Invalid URL');
      return;
    }

    try {
      // const { data } = await axios.post('http://localhost:8000/url', {
      //   LongUrl: longUrl
      // });

      setShortUrl(`https://www.tinyUrl.com/222`);

      setIsNewLink(true);

      setTimeout(() => {
        setIsNewLink(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const validateUrl = (value: string): boolean => {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      value
    );
  };

  return (
    <div className="flex h-screen justify-center items-center bg-dark-gray">
      <div className="relative container h-[80%] flex flex-col rounded-xl shadow-lg items-center opacity-4 bg-dark-primary">
        <h1 className="absolute top-52 text-6xl font-bold text-light-primary font-breeSerif">
          MiniiURL
        </h1>

        <div className="flex flex-col w-1/2 m-auto">
          <h1 className="text-lg text-light-primary text-center font-robotoCondensed">
            MiniiURL minimizes your URLs into short, manageable links for simple
            sharing.
          </h1>

          <div className="flex flex-row justify-between my-5 h-11">
            <div className={`relative w-[89%]`}>
              <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                <LinkIcon className="h-4 w-4 text-dark-secondary" />
              </div>

              <input
                autoFocus={true}
                className="h-11 font-sans w-full p-3 ps-10 placeholder-dark-primary bg-bg-light border border-dark-tertiary rounded-lg leading-tight"
                type="url"
                placeholder="Enter your link here..."
                value={longUrl}
                onChange={e => setLongUrl(e.target.value)}
              />
            </div>

            <Button
              disabled={isLoading || !longUrl}
              className={`clickable w-[9%] bg-dark-tertiary hover:bg-dark-primary ${
                isLoading || !longUrl ? 'opacity-40 cursor-not-allowed' : ''
              }`}
              type="button"
              onClick={() => fetchShortUrl()}
            >
              <ArrowPathIcon
                className={`${
                  isLoading ? 'animate-spin ' : ''
                } h-5 w-5 text-light-secondary`}
              />
            </Button>
          </div>

          <div className="flex flex-row justify-between h-11">
            <Link
              to={shortUrl}
              target="_blank"
              className={`ps-5 font-sans flex items-center bg-dark-tertiary hover:bg-dark-primary border border-dark-700 rounded-lg w-[78%] leading-tight text-url-blue hover:underline 
                
                ${
                  isNewLink
                    ? 'animate-border bg-gradient-to-r from-light-gray via-url-blue to-dark-primary bg-[length:400%_400%]'
                    : shortUrl
                    ? ''
                    : 'opacity-40 pointer-events-none'
                }`}
            >
              {shortUrl}
            </Link>

            <Button
              disabled={!shortUrl}
              className={`clickable gap-3 p-2 text-sm w-[20%] bg-dark-tertiary hover:bg-dark-primary ${
                !shortUrl ? 'opacity-40 cursor-not-allowed' : ''
              }`}
              onClick={() => {
                copy(shortUrl);
                setCopied(true);
              }}
              onMouseLeave={() => setCopied(false)}
            >
              {copied ? (
                <>
                  <CheckIcon className="h-4 w-4 text-light-secondary" />
                  Copied
                </>
              ) : (
                <>
                  <ClipboardIcon className="h-4 w-4 text-light-secondary" />
                  Copy Link
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;