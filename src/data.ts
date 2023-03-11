export interface ResumeData {
  package: {
    name: string;
    version: string;
  };
  theme: {
    colors: {
      primary: string;
      primary_muted: string;
      text?: string;
      text_dim?: string;
      paper_background?: string;
      background?: string;

      dark_text?: string;
      dark_text_dim?: string;
      dark_paper_background?: string;
      dark_background?: string;
    };
  };
  about: {
    /** Your full name as it should appear on your resume */
    name: string;
    /**
     * A short description of what you do
     * @example "Full Stack Software Engineer"
     */
    label?: string;
    /** A longer description of yourself */
    summary?: string;
    /** URL to image of yourself or a personal logo */
    image_url?: string;
    email?: string;
    phone?: string;
    /**
     * Your physical location.
     * This could be your address, or just a city, etc
     */
    location?: string;
    website?: {
      /**
       * Actual URL
       * @example "https://orleans.io"
       */
      url: string;
      /**
       * Pretty version of URL
       * @example "orleans.io"
       */
      pretty: string;
    };
    profiles?: {
      /** Name of the social network */
      network: 'github';
      /**
       * Your username on the network
       * @example "dudeofawesome"
       */
      username: string;
      /**
       * A link to your profile on the network
       * @example "https://github.com/dudeofawesome"
       */
      url: string;
    }[];
  };
  sections: {
    title: string;
    items: {
      title: string;
      location?: string;
      duration?: string;
      description?: string | string[];
    }[];
  }[];
  education?: {
    name: string;
    location?: string;
    duration?: string;
    description?: string | string[];
  }[];
  skills?: Skill[];
  languages?: Skill[];
}

export type Skill =
  | string
  | {
      name: string;
      /**
       * Whether the skill should be featured. Typically, this will be seen as
       * the text being bold or otherwise highlighted
       * @default false
       */
      featured?: boolean;
      /** A URL to a demonstration of the skill */
      link?: string;
    };
