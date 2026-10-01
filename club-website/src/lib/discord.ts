import { DISCORD_INVITE_CODE } from './site';

// Member count for the server behind our invite, refreshed hourly.
// Returns null on any failure so the page renders without it.
export async function getDiscordMemberCount(): Promise<number | null> {
  try {
    const res = await fetch(
      `https://discord.com/api/v10/invites/${DISCORD_INVITE_CODE}?with_counts=true`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return null;
    const data = await res.json();
    const count = data?.approximate_member_count;
    return typeof count === 'number' && count > 0 ? count : null;
  } catch {
    return null;
  }
}
