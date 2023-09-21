import React from "react";
import { Mail, GitHub, Gitlab, Linkedin } from "react-feather";

import { Chip } from "../components/Chip";

export const Connect: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap gap-2 text-sm">
      <Chip>
        <a
          className="flex items-center"
          href="mailto:logan@kuzyk.net"
          target="blank"
        >
          <Mail className="w-4 h-4 mr-2" />
          <span>logan@kuzyk.net</span>
        </a>
      </Chip>
      <Chip>
        <a
          className="flex items-center"
          href="https://github.com/logankuzyk"
          target="blank"
        >
          <GitHub className="w-4 h-4 mr-2" />
          <span>GitHub</span>
        </a>
      </Chip>
      <Chip>
        <a
          className="flex items-center"
          href="https://gitlab.com/logankuzyk"
          target="blank"
        >
          <Gitlab className="w-4 h-4 mr-2" />
          <span>GitLab</span>
        </a>
      </Chip>
      <Chip>
        <a
          className="flex items-center"
          href="https://www.linkedin.com/in/logan-kuzyk-90648b132"
          target="blank"
        >
          <Linkedin className="w-4 h-4 mr-2" />
          <span>LinkedIn</span>
        </a>
      </Chip>
    </div>
  );
};
