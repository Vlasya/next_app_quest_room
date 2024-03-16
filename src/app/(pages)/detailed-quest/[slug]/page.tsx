import React from 'react';
import { ParsedUrlQuery } from 'querystring';

interface Props {
  params: { slug: string };
}

const QuestDetailPage = ({ params }: Props) => {
  const { slug } = params;

  return <div>QuestDetailPage {slug}</div>;
};

export default QuestDetailPage;
