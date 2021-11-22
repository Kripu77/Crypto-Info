import React from 'react'
import { data } from './data'
const Links = () => {

    const [linkData, setLinkData] = React.useState(data);



    return (
      <div className="flex space-x-3 p-4 ml-auto mr-auto">
        {linkData.map((value) => {
          const { name, url, id } = value;
          return (
            <div key={id}>
              <a href={url} alt={name} className=" text-white hover:text-gray-300 text-3xl">
                {" "}
                {name}
              </a>
            </div>
          );
        })}
      </div>
    );
}

export default Links
