import { TeamSettings } from '@/components/teams/TeamSettings';
import {
  checkUserTeamBySlug,
  getTeamInvitations,
  getTeamMembers,
  getTeamSubscriptions,
} from '@/lib/queries';
import { getCurrentUser } from '@/lib/sessions';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { notFound, redirect } from 'next/navigation';
import { TeamPageProps } from '../page';

const TeamSettingsPage = async ({ params }: TeamPageProps) => {
  const teamSlug = params.teamSlug;
  const user = await getCurrentUser();
  if (!user) {
    return redirect(authOptions.pages!.signIn!);
  }

  const team = await checkUserTeamBySlug(teamSlug, user.id);

  if (!team) {
    redirect('/teams');
  }

  const members = await getTeamMembers(teamSlug);
  const invitations = await getTeamInvitations(teamSlug);
  const subscriptions = await getTeamSubscriptions(teamSlug);

  if (!user?.id) return notFound();
  return (
    <TeamSettings
      team={team}
      members={members}
      invitations={invitations}
      user={user}
      subscriptions={subscriptions}
    />
  );
};

export default TeamSettingsPage;