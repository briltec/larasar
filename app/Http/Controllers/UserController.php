<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use neto737\BitGoSDK\Enum\CurrencyCode;
use neto737\BitGoSDK\BitGoSDK;
use Illuminate\Http\Request;
use App\User;
use Hash;
use Auth;
use DB;

class UserController extends Controller
{   //Tags: bitgoModule

    use AuthenticatesUsers;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $bitgo = new BitGoSDK(env('YOUR_API_KEY_HERE'), CurrencyCode::BITCOIN, false);
      $bitgo->walletId = env('YOUR_WALLET_ID_HERE');//TagIndex: bitgoModule
      return$createAddress = $bitgo->createWalletAddress();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return 'create';
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    { //return $request;

      if ($request->locale) $this->edit($request->locale);

      if ($request->user == 'login') {

        $this->validate($request, [
          'email' => ['required', 'string', 'email', 'max:255'],
          'password' => ['required'],
        ]);

        $http = new \GuzzleHttp\Client; $passport = config('services.passport');

        $response = $http->post($passport['login_endpoint'], [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => $passport['client_id'],
                'client_secret' => $passport['client_secret'],
                'username' => $request->email,
                'password' => $request->password,
                'scope' => '',
            ]
        ]); return json_decode((string) $response->getBody(), true);

      } elseif ($request->user == 'register') {

        $this->validate($request, [
          'name' => ['required', 'string', 'max:255'],
          'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
          'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        $seed = str_split('abcdefghijklmnopqrstuvwxyz'
             .'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
             .'0123456789!@#$%^&*()'); // and any other characters
        shuffle($seed); // probably optional since array_is randomized; this may be redundant
        $rand = ''; foreach (array_rand($seed, 6) as $k) $rand .= $seed[$k];

        $user = User::create([
            'role' => $request->role,
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]); //UserModule: TagStore

        if(Auth::check()) $content_role = [
            'title'=> 'The '.Auth::user()->role.' Added You As '.$request['role'],
            'body'=> 'Please use your email: '.$request['email'].' and password: '.$rand.' to login',
            'button' => 'Click Here',
            'url' => env('APP_URL').'/login'
        ];  //Mail::to($request->email)->send(new InfoOfatv($content_role));

        // if($request->form == 'admin')
        // return back()->with('status', $request['role'].' Created Successfully');
        return response()->json('Registered successfully', 200);

<<<<<<< HEAD
      } elseif ($request->locale) {

        return [
          'appName' => config('app.name'),
          'locale' => app()->getLocale(),
          'locales' => config('app.locales'),
          'services' => config('services'),
        ];

=======
>>>>>>> modemb/dev
      } elseif ($request->id) {

        // DB::table('oauth_access_tokens')
        //   ->where('user_id', $request->id)
        //   ->delete();

        // auth()->user()->tokens->each(function ($token, $key) {
        //     $token->delete();
        // });

        // $this->guard()->logout();

        return response()->json('Logged out successfully', 200);

      }

      return [
        'appName' => config('app.name'),
        'locale' => app()->getLocale(),
        'locales' => config('app.locales'),
        // 'services' => config('services'),
      ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
      return User::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
      config(['app.locale' => $id]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      $this->validate($request, [
          'name', //=> 'string|max:255',
          'email', //=> 'string|email|max:255|unique:users',
          'phone', //=> 'numeric|min:6|unique:users',
      ]);

      $check = Auth::validate([
          'email'    => Auth::user()->email,//$this->user->email,
          'password' => $request->current_password
      ]);

      $file = $request->file('avatar');
      $put = User::find($id);
      if ($request->name) $put->name = $request->name;
      if ($request->email) $put->email = $request->email;
      if ($request->phone) $put->phone = $request->phone;
      if ($request->address) $put->address = $request->address;
      if ($request->city) $put->city = $request->city;
      if ($request->zip_code)  $put->zip_code = $request->zip_code;
      if ($request->password) {
          if (!$check) {
              return back()->with('status', 'Current Password Do Not Match Our Record');
          }
          if ($request->password != $request->password_confirmation) {
              return back()->with('status', 'Password Confirmation Do Not Match');
          }   $put->password = bcrypt($request->password);
      }
      if ($request->hasFile('avatar')) {
          $FileName = $file->getClientOriginalName();
          $path = $file->storeAs('images/profile', $id.'jpg');
          $file->move('images/profile', $id.'jpg');
          $put->avatar = $path;
      }   $put->update();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
