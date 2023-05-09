<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //signup
    public function signup(SignupRequest $request)
    {

        $data = $request->validated();
        /** @var \App\Models\User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        $token = $user->createToken('my_token')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);

        //alternative
        //return response(compact('user','token');
    }

    //login
    public function login(LoginRequest $request)
    {
        $data = $request->validated();

        if(!Auth::attempt($data)){
            return response([
                'message'=>'Provided email or password is incorrect'
            ],422);
        }
        /** @var \App\Models\User $user */
        $user=Auth::user();
        $token=$user->createToken('my_token')->plainTextToken;

        return response(compact('user','token'));


    }

    //logout
    public function logout(Request $request)
    {
        /** @var \App\Models\User $user */
        $user=$request->user();
        $user->currentAccessToken()->delete();

        return response('Successfully Logged out','204');
    }
}
