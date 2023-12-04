import TeamInfo from '@/components/teams/form/settings/TeamInfo';
import React from 'react';
import { TeamPageProps } from '../../page';
import { getCurrentUser } from '@/lib/sessions';
import { checkUserTeamBySlug } from '@/lib/queries';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { redirect } from 'next/navigation';
import TeamSettingsPageLayout from '@/components/teams/form/settings/SettingsPageLayout';
import { TEAM_SETTINGS_ITEMS, routes } from '@/core/constants';

export default async function Page({ params }: TeamPageProps) {
  const teamSlug = params.teamSlug;
  const user = await getCurrentUser();
  if (!user) {
    return redirect(authOptions.pages!.signIn!);
  }
  const team = await checkUserTeamBySlug(teamSlug, user.id);

  if (!team) {
    redirect('/teams');
  }

  const pageInfo = TEAM_SETTINGS_ITEMS.find((item) => item.id === 'profile');
  if (!pageInfo) {
    throw new Error('Page not implemented (see core/constants.tsx)');
  }
  const { title, subtitle, routePath } = pageInfo;
  return (
    <TeamSettingsPageLayout
      team={team}
      title={title}
      subtitle={subtitle}
      breadcrumbCurrentItem={{
        name: title,
        href: routePath.replace(':slug', team.slug),
      }}
    >
      <TeamInfo team={team} />
    </TeamSettingsPageLayout>
  );
}
