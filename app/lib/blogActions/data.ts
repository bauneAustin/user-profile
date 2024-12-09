'use server';

import { createClient } from '@supabase/supabase-js';
import {getOktokit} from './actions';
const octokit = getOktokit();
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
    const githubCommits = await (await octokit).rest.repos.listContributors({ repo: 'user-profile', owner: 'bauneAustin', anon: '1' });
    return githubCommits.data;
}
