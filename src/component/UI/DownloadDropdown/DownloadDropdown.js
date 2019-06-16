import React from "react";

import { DropDown } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const DownloadDropdown = (props) => {
  let dropdown = null;
  if (props.show) {
    dropdown = (
      <DropDown>
        <a href="" download>
          DOWNLOAD
        </a>
        <FontAwesomeIcon icon={faDownload} />
      </DropDown>
    );
  }
  return dropdown;
};

export default DownloadDropdown;
