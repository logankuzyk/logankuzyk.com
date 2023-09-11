import React from "react";
import { Mail, GitHub, Gitlab, Linkedin } from "react-feather";

export const Connect: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap gap-2 text-sm">
      <a
        href="mailto:logan@kuzyk.net"
        className="flex items-center"
        target="blank"
      >
        <Mail className="w-4 h-4 mr-2" />
        <span>logan@kuzyk.net</span>
      </a>
      <a
        href="https://github.com/logankuzyk"
        className="flex items-center"
        target="blank"
      >
        <GitHub className="w-4 h-4 mr-2" />
        <span>GitHub</span>
      </a>
      <a
        href="https://gitlab.com/logankuzyk"
        className="flex items-center"
        target="blank"
      >
        <Gitlab className="w-4 h-4 mr-2" />
        <span>GitLab</span>
      </a>
      <a
        href="https://www.linkedin.com/in/logan-kuzyk-90648b132"
        target="blank"
        className="flex items-center"
      >
        <Linkedin className="w-4 h-4 mr-2" />
        <span>LinkedIn</span>
      </a>
    </div>
  );
};
