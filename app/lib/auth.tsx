import { compare, hash } from 'bcryptjs';
import { sql } from '@vercel/postgres';
import { NextResponse, NextRequest } from 'next/server';

export const loginUser = async(req:NextRequest, res:NextRequest) => {
  console.log(req);
}

export const registerUser = async(req:NextRequest, res:NextRequest) => {

}