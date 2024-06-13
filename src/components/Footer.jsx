import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Blogify
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferror">
                  Know about Us
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferror">
                  Blogify 
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Darshanjasani73/MERN-Blog"
                  target="_blank"
                  rel="noopener noreferror"
                >
                  Github Repo
                </Footer.Link>
                <Footer.Link href="https://www.linkedin.com/in/darshan-jasani-0b37b623a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Darshanjasani73/MERN-Blog/blob/main/README.md"
                  target="_blank"
                  rel="noopener noreferror"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Blogify"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="https://www.linkedin.com/in/darshan-jasani-0b37b623a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" icon={BsLinkedin} />
            <Footer.Icon
              href="https://github.com/Darshanjasani73"
              icon={BsGithub}
            />
            <Footer.Icon href="https://www.instagram.com/d_j909?igsh=MXQ4dms2ZG82eGNyeA==" icon={BsInstagram} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
