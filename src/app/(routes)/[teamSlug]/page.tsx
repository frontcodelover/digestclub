import TeamPublicPage from '@/components/pages/TeamPublicPage';
import { getPublicTeam } from '@/lib/queries';
import { getEnvHost } from '@/lib/server';
import { generateTeamOG } from '@/utils/open-graph';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

interface PageProps {
  params: { teamSlug: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const team = await getPublicTeam(params.teamSlug);
  const url = generateTeamOG(team?.slug || '');

  return {
    alternates: {
      types: {
        'application/rss+xml': `${getEnvHost()}/${params.teamSlug}/rss.xml`,
        'application/atom+xml': `${getEnvHost()}/${params.teamSlug}/atom.xml`,
      },
    },
    title: `${team?.name}`,
    twitter: {
      card: 'summary_large_image',
      title: `${team?.name}`,
      description: team?.bio || team?.name,
      images: [url],
    },
    openGraph: {
      type: 'website',
      title: `${team?.name}`,
      description: team?.bio || team?.name,
      url,
      images: [
        {
          url,
          width: 1200,
          height: 600,
        },
      ],
    },
  };
}

const PublicTeamPage = async ({ params }: PageProps) => {
  const team = await getPublicTeam(params.teamSlug);

  if (!team) {
    redirect('/');
  }

  return <TeamPublicPage team={team} />;
};

export default PublicTeamPage;
