import { supabase } from '@/lib/supabase';

/**
 * Test Supabase connection and projects table
 */
export async function testSupabaseConnection() {
  try {
    console.log('Testing Supabase connection...');

    // Test basic connection
    const { count, error } = await supabase
      .from('projects')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error('❌ Connection failed:', error.message);
      return false;
    }

    console.log('✅ Connection successful');
    console.log(`📊 Projects in database: ${count || 0}`);

    // Test fetching projects
    const { data: projects, error: fetchError } = await supabase
      .from('projects')
      .select('*')
      .limit(3);

    if (fetchError) {
      console.error('❌ Error fetching projects:', fetchError.message);
      return false;
    }

    console.log('✅ Projects fetched successfully');
    console.log(
      '📄 Sample projects:',
      projects?.map((p) => p.name),
    );

    return true;
  } catch (error) {
    console.error('❌ Unexpected error:', error);
    return false;
  }
}

/**
 * Get Supabase connection status for debugging
 */
export function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return {
    hasUrl: !!url,
    hasKey: !!key,
    urlPreview: url ? `${url.slice(0, 20)}...` : 'Not set',
    keyPreview: key ? `${key.slice(0, 20)}...` : 'Not set',
  };
}
