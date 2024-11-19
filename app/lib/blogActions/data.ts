import { createClient } from '@supabase/supabase-js';
import { Octokit } from "octokit";
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getPosts() {
    const { data, error } = await supabase
        .from('blog')
        .select('*');

    if (error) {
        console.error(error);
        return [];
    }
    return data;
};

export async function getPost(id: string) {
    const {data, error} = await supabase
        .from('blog')
        .select('*')
        .eq('id', id);

    if (error) {
        console.error(error);
        return [];
    }
    return data;
}

export async function getGithubCommits() {
    const githubCommits = await octokit.rest.repos.listContributors({ repo: 'user-profile', owner: 'bauneAustin' });
    return githubCommits.data;
}
