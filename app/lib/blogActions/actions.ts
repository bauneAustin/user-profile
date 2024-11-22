'use server'

import { Octokit } from "octokit";
export const getOktokit = async () => {
    return new Octokit({ auth: process.env.GITHUB_TOKEN });
} 
