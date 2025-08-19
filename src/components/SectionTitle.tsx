import React from 'react';

type Props = {
  title: string;
};

const SectionTitle: React.FC<Props> = ({ title }) => (
  <h2 className="section-title">{title}</h2>
);

export default SectionTitle;
