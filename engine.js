var OCW=(()=>{var Gl=Object.defineProperty;var Hm=Object.getOwnPropertyDescriptor;var Vm=Object.getOwnPropertyNames;var Gm=Object.prototype.hasOwnProperty;var Uf=(s,t)=>{for(var e in t)Gl(s,e,{get:t[e],enumerable:!0})},Wm=(s,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Vm(t))!Gm.call(s,i)&&i!==e&&Gl(s,i,{get:()=>t[i],enumerable:!(n=Hm(t,i))||n.enumerable});return s};var Xm=s=>Wm(Gl({},"__esModule",{value:!0}),s);var nb={};Uf(nb,{PAL:()=>Zt,R:()=>Cs,carSpot:()=>zl,create:()=>eb,gunzip:()=>YM,inPoly:()=>zm,lawsOf:()=>Bl,merc:()=>Fo,piazzaC:()=>Rf,piazzaR:()=>km,polyFill:()=>Cf,unmerc:()=>Tf});var Ll={};Uf(Ll,{ACESFilmicToneMapping:()=>Op,AddEquation:()=>Pi,AddOperation:()=>Lp,AdditiveAnimationBlendMode:()=>pf,AdditiveBlending:()=>Uh,AgXToneMapping:()=>Bp,AlphaFormat:()=>cf,AlwaysCompare:()=>nm,AlwaysDepth:()=>Fa,AlwaysStencilFunc:()=>Fh,AmbientLight:()=>ll,AnimationAction:()=>_l,AnimationClip:()=>Ss,AnimationLoader:()=>du,AnimationMixer:()=>Pu,AnimationObjectGroup:()=>Cu,AnimationUtils:()=>RM,ArcCurve:()=>Uc,ArrayCamera:()=>yc,ArrowHelper:()=>Ku,AttachedBindMode:()=>Oh,Audio:()=>gl,AudioAnalyser:()=>Tu,AudioContext:()=>Io,AudioListener:()=>Eu,AudioLoader:()=>Su,AxesHelper:()=>ju,BackSide:()=>pn,BasicDepthPacking:()=>Yp,BasicShadowMap:()=>Jm,BatchedMesh:()=>Rc,Bone:()=>uo,BooleanKeyframeTrack:()=>vi,Box2:()=>zu,Box3:()=>Ne,Box3Helper:()=>Ju,BoxGeometry:()=>xi,BoxHelper:()=>Zu,BufferAttribute:()=>Me,BufferGeometry:()=>he,BufferGeometryLoader:()=>pl,ByteType:()=>rf,Cache:()=>ui,Camera:()=>or,CameraHelper:()=>Yu,CanvasTexture:()=>cu,CapsuleGeometry:()=>zc,CatmullRomCurve3:()=>Dc,CineonToneMapping:()=>Np,CircleGeometry:()=>kc,ClampToEdgeWrapping:()=>In,Clock:()=>ml,Color:()=>Gt,ColorKeyframeTrack:()=>To,ColorManagement:()=>be,CompressedArrayTexture:()=>ou,CompressedCubeTexture:()=>au,CompressedTexture:()=>lr,CompressedTextureLoader:()=>pu,ConeGeometry:()=>Hc,ConstantAlphaFactor:()=>Cp,ConstantColorFactor:()=>Tp,Controls:()=>tf,CubeCamera:()=>_c,CubeReflectionMapping:()=>mi,CubeRefractionMapping:()=>Ii,CubeTexture:()=>ps,CubeTextureLoader:()=>mu,CubeUVReflectionMapping:()=>gr,CubicBezierCurve:()=>po,CubicBezierCurve3:()=>Nc,CubicInterpolant:()=>sl,CullFaceBack:()=>Lh,CullFaceFront:()=>fp,CullFaceFrontBack:()=>Zm,CullFaceNone:()=>up,Curve:()=>Tn,CurvePath:()=>Bc,CustomBlending:()=>dp,CustomToneMapping:()=>Fp,CylinderGeometry:()=>Ui,Cylindrical:()=>Fu,Data3DTexture:()=>so,DataArrayTexture:()=>ir,DataTexture:()=>Ln,DataTextureLoader:()=>gu,DataUtils:()=>s0,DecrementStencilOp:()=>og,DecrementWrapStencilOp:()=>cg,DefaultLoadingManager:()=>vm,DepthFormat:()=>as,DepthStencilFormat:()=>us,DepthTexture:()=>oo,DetachedBindMode:()=>kp,DirectionalLight:()=>pr,DirectionalLightHelper:()=>qu,DiscreteInterpolant:()=>rl,DisplayP3ColorSpace:()=>Cl,DodecahedronGeometry:()=>Vc,DoubleSide:()=>bn,DstAlphaFactor:()=>bp,DstColorFactor:()=>wp,DynamicCopyUsage:()=>Sg,DynamicDrawUsage:()=>xg,DynamicReadUsage:()=>yg,EdgesGeometry:()=>Gc,EllipseCurve:()=>hr,EqualCompare:()=>jp,EqualDepth:()=>za,EqualStencilFunc:()=>fg,EquirectangularReflectionMapping:()=>qr,EquirectangularRefractionMapping:()=>Yr,Euler:()=>An,EventDispatcher:()=>Dn,ExtrudeGeometry:()=>Wc,FileLoader:()=>Hn,Float16BufferAttribute:()=>qh,Float32BufferAttribute:()=>Yt,FloatType:()=>_n,Fog:()=>bc,FogExp2:()=>Mc,FramebufferTexture:()=>ru,FrontSide:()=>pi,Frustum:()=>ms,GLBufferAttribute:()=>Uu,GLSL1:()=>Eg,GLSL3:()=>Bh,GreaterCompare:()=>Qp,GreaterDepth:()=>Ha,GreaterEqualCompare:()=>em,GreaterEqualDepth:()=>ka,GreaterEqualStencilFunc:()=>gg,GreaterStencilFunc:()=>pg,GridHelper:()=>Wu,Group:()=>Ge,HalfFloatType:()=>xr,HemisphereLight:()=>dr,HemisphereLightHelper:()=>Gu,IcosahedronGeometry:()=>ur,ImageBitmapLoader:()=>bu,ImageLoader:()=>ws,ImageUtils:()=>gc,IncrementStencilOp:()=>rg,IncrementWrapStencilOp:()=>ag,InstancedBufferAttribute:()=>_i,InstancedBufferGeometry:()=>mr,InstancedInterleavedBuffer:()=>Fi,InstancedMesh:()=>Tc,Int16BufferAttribute:()=>Wh,Int32BufferAttribute:()=>Xh,Int8BufferAttribute:()=>Hh,IntType:()=>bl,InterleavedBuffer:()=>gs,InterleavedBufferAttribute:()=>an,Interpolant:()=>vs,InterpolateDiscrete:()=>$r,InterpolateLinear:()=>mc,InterpolateSmooth:()=>La,InvertStencilOp:()=>lg,KeepStencilOp:()=>ts,KeyframeTrack:()=>Rn,LOD:()=>wc,LatheGeometry:()=>vo,Layers:()=>sr,LessCompare:()=>Kp,LessDepth:()=>Ba,LessEqualCompare:()=>mf,LessEqualDepth:()=>ls,LessEqualStencilFunc:()=>dg,LessStencilFunc:()=>ug,Light:()=>Kn,LightProbe:()=>fl,Line:()=>$n,Line3:()=>Lo,LineBasicMaterial:()=>Je,LineCurve:()=>mo,LineCurve3:()=>Oc,LineDashedMaterial:()=>il,LineLoop:()=>Ic,LineSegments:()=>On,LinearDisplayP3ColorSpace:()=>No,LinearFilter:()=>ke,LinearInterpolant:()=>Ao,LinearMipMapLinearFilter:()=>Qm,LinearMipMapNearestFilter:()=>jm,LinearMipmapLinearFilter:()=>qn,LinearMipmapNearestFilter:()=>Or,LinearSRGBColorSpace:()=>Mi,LinearToneMapping:()=>Up,LinearTransfer:()=>jr,Loader:()=>cn,LoaderUtils:()=>Po,LoadingManager:()=>Ro,LoopOnce:()=>Hp,LoopPingPong:()=>Gp,LoopRepeat:()=>Vp,LuminanceAlphaFormat:()=>uf,LuminanceFormat:()=>hf,MOUSE:()=>qm,Material:()=>Ze,MaterialLoader:()=>dl,MathUtils:()=>Es,Matrix2:()=>Bu,Matrix3:()=>me,Matrix4:()=>ne,MaxEquation:()=>xp,Mesh:()=>ce,MeshBasicMaterial:()=>Nn,MeshDepthMaterial:()=>ao,MeshDistanceMaterial:()=>co,MeshLambertMaterial:()=>Oi,MeshMatcapMaterial:()=>nl,MeshNormalMaterial:()=>el,MeshPhongMaterial:()=>Qc,MeshPhysicalMaterial:()=>jc,MeshStandardMaterial:()=>Eo,MeshToonMaterial:()=>tl,MinEquation:()=>gp,MirroredRepeatWrapping:()=>Jr,MixOperation:()=>Ip,MultiplyBlending:()=>Nh,MultiplyOperation:()=>Uo,NearestFilter:()=>Ye,NearestMipMapLinearFilter:()=>Km,NearestMipMapNearestFilter:()=>$m,NearestMipmapLinearFilter:()=>Js,NearestMipmapNearestFilter:()=>sf,NeutralToneMapping:()=>zp,NeverCompare:()=>$p,NeverDepth:()=>Oa,NeverStencilFunc:()=>hg,NoBlending:()=>fi,NoColorSpace:()=>ci,NoToneMapping:()=>di,NormalAnimationBlendMode:()=>Rl,NormalBlending:()=>os,NotEqualCompare:()=>tm,NotEqualDepth:()=>Va,NotEqualStencilFunc:()=>mg,NumberKeyframeTrack:()=>ys,Object3D:()=>Se,ObjectLoader:()=>Mu,ObjectSpaceNormalMap:()=>Jp,OctahedronGeometry:()=>So,OneFactor:()=>vp,OneMinusConstantAlphaFactor:()=>Pp,OneMinusConstantColorFactor:()=>Rp,OneMinusDstAlphaFactor:()=>Sp,OneMinusDstColorFactor:()=>Ep,OneMinusSrcAlphaFactor:()=>Na,OneMinusSrcColorFactor:()=>Mp,OrthographicCamera:()=>ar,P3Primaries:()=>to,PCFShadowMap:()=>nf,PCFSoftShadowMap:()=>yl,PMREMGenerator:()=>ro,Path:()=>xs,PerspectiveCamera:()=>Be,Plane:()=>Wn,PlaneGeometry:()=>Jn,PlaneHelper:()=>$u,PointLight:()=>cl,PointLightHelper:()=>Vu,Points:()=>Lc,PointsMaterial:()=>fo,PolarGridHelper:()=>Xu,PolyhedronGeometry:()=>Di,PositionalAudio:()=>Au,PropertyBinding:()=>we,PropertyMixer:()=>xl,QuadraticBezierCurve:()=>go,QuadraticBezierCurve3:()=>xo,Quaternion:()=>on,QuaternionKeyframeTrack:()=>Ms,QuaternionLinearInterpolant:()=>ol,RED_GREEN_RGTC2_Format:()=>dc,RED_RGTC1_Format:()=>df,REVISION:()=>vl,RGBADepthPacking:()=>Zp,RGBAFormat:()=>dn,RGBAIntegerFormat:()=>Tl,RGBA_ASTC_10x10_Format:()=>ac,RGBA_ASTC_10x5_Format:()=>sc,RGBA_ASTC_10x6_Format:()=>rc,RGBA_ASTC_10x8_Format:()=>oc,RGBA_ASTC_12x10_Format:()=>cc,RGBA_ASTC_12x12_Format:()=>lc,RGBA_ASTC_4x4_Format:()=>$a,RGBA_ASTC_5x4_Format:()=>Ka,RGBA_ASTC_5x5_Format:()=>ja,RGBA_ASTC_6x5_Format:()=>Qa,RGBA_ASTC_6x6_Format:()=>tc,RGBA_ASTC_8x5_Format:()=>ec,RGBA_ASTC_8x6_Format:()=>nc,RGBA_ASTC_8x8_Format:()=>ic,RGBA_BPTC_Format:()=>Hr,RGBA_ETC2_EAC_Format:()=>Ja,RGBA_PVRTC_2BPPV1_Format:()=>qa,RGBA_PVRTC_4BPPV1_Format:()=>Xa,RGBA_S3TC_DXT1_Format:()=>Br,RGBA_S3TC_DXT3_Format:()=>zr,RGBA_S3TC_DXT5_Format:()=>kr,RGBDepthPacking:()=>eg,RGBFormat:()=>lf,RGBIntegerFormat:()=>tg,RGB_BPTC_SIGNED_Format:()=>hc,RGB_BPTC_UNSIGNED_Format:()=>uc,RGB_ETC1_Format:()=>Ya,RGB_ETC2_Format:()=>Za,RGB_PVRTC_2BPPV1_Format:()=>Wa,RGB_PVRTC_4BPPV1_Format:()=>Ga,RGB_S3TC_DXT1_Format:()=>Fr,RGDepthPacking:()=>ng,RGFormat:()=>ff,RGIntegerFormat:()=>Al,RawShaderMaterial:()=>Kc,Ray:()=>Li,Raycaster:()=>Du,Rec709Primaries:()=>Qr,RectAreaLight:()=>hl,RedFormat:()=>El,RedIntegerFormat:()=>Do,ReinhardToneMapping:()=>Dp,RenderTarget:()=>xc,RepeatWrapping:()=>Zr,ReplaceStencilOp:()=>sg,ReverseSubtractEquation:()=>mp,RingGeometry:()=>Xc,SIGNED_RED_GREEN_RGTC2_Format:()=>pc,SIGNED_RED_RGTC1_Format:()=>fc,SRGBColorSpace:()=>Pn,SRGBTransfer:()=>Ee,Scene:()=>cr,ShaderChunk:()=>_e,ShaderLib:()=>rn,ShaderMaterial:()=>mn,ShadowMaterial:()=>$c,Shape:()=>wn,ShapeGeometry:()=>Ni,ShapePath:()=>Qu,ShapeUtils:()=>Un,ShortType:()=>of,Skeleton:()=>Ac,SkeletonHelper:()=>Hu,SkinnedMesh:()=>Ec,Source:()=>hi,Sphere:()=>Oe,SphereGeometry:()=>wo,Spherical:()=>Ou,SphericalHarmonics3:()=>ul,SplineCurve:()=>_o,SpotLight:()=>al,SpotLightHelper:()=>ku,Sprite:()=>Sc,SpriteMaterial:()=>ho,SrcAlphaFactor:()=>Da,SrcAlphaSaturateFactor:()=>Ap,SrcColorFactor:()=>yp,StaticCopyUsage:()=>bg,StaticDrawUsage:()=>eo,StaticReadUsage:()=>vg,StereoCamera:()=>wu,StreamCopyUsage:()=>wg,StreamDrawUsage:()=>_g,StreamReadUsage:()=>Mg,StringKeyframeTrack:()=>yi,SubtractEquation:()=>pp,SubtractiveBlending:()=>Dh,TOUCH:()=>Ym,TangentSpaceNormalMap:()=>Bi,TetrahedronGeometry:()=>qc,Texture:()=>He,TextureLoader:()=>xu,TextureUtils:()=>Oy,TorusGeometry:()=>Yc,TorusKnotGeometry:()=>Zc,Triangle:()=>Xn,TriangleFanDrawMode:()=>qp,TriangleStripDrawMode:()=>Xp,TrianglesDrawMode:()=>Wp,TubeGeometry:()=>Jc,UVMapping:()=>Ml,Uint16BufferAttribute:()=>fs,Uint32BufferAttribute:()=>ds,Uint8BufferAttribute:()=>Vh,Uint8ClampedBufferAttribute:()=>Gh,Uniform:()=>Iu,UniformsGroup:()=>Lu,UniformsLib:()=>kt,UniformsUtils:()=>Oo,UnsignedByteType:()=>Zn,UnsignedInt248Type:()=>hs,UnsignedInt5999Type:()=>af,UnsignedIntType:()=>gi,UnsignedShort4444Type:()=>Sl,UnsignedShort5551Type:()=>wl,UnsignedShortType:()=>er,VSMShadowMap:()=>Gn,Vector2:()=>vt,Vector3:()=>L,Vector4:()=>ve,VectorKeyframeTrack:()=>bs,VideoTexture:()=>su,WebGL3DRenderTarget:()=>kh,WebGLArrayRenderTarget:()=>zh,WebGLCoordinateSystem:()=>Yn,WebGLCubeRenderTarget:()=>vc,WebGLMultipleRenderTargets:()=>ef,WebGLRenderTarget:()=>En,WebGLRenderer:()=>lo,WebGLUtils:()=>fm,WebGPUCoordinateSystem:()=>no,WireframeGeometry:()=>fr,WrapAroundEnding:()=>Kr,ZeroCurvatureEnding:()=>is,ZeroFactor:()=>_p,ZeroSlopeEnding:()=>ss,ZeroStencilOp:()=>ig,createCanvasElement:()=>sm});var vl="169",qm={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ym={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},up=0,Lh=1,fp=2,Zm=3,Jm=0,nf=1,yl=2,Gn=3,pi=0,pn=1,bn=2,fi=0,os=1,Uh=2,Dh=3,Nh=4,dp=5,Pi=100,pp=101,mp=102,gp=103,xp=104,_p=200,vp=201,yp=202,Mp=203,Da=204,Na=205,bp=206,Sp=207,wp=208,Ep=209,Ap=210,Tp=211,Rp=212,Cp=213,Pp=214,Oa=0,Fa=1,Ba=2,ls=3,za=4,ka=5,Ha=6,Va=7,Uo=0,Ip=1,Lp=2,di=0,Up=1,Dp=2,Np=3,Op=4,Fp=5,Bp=6,zp=7,Oh="attached",kp="detached",Ml=300,mi=301,Ii=302,qr=303,Yr=304,gr=306,Zr=1e3,In=1001,Jr=1002,Ye=1003,sf=1004,$m=1004,Js=1005,Km=1005,ke=1006,Or=1007,jm=1007,qn=1008,Qm=1008,Zn=1009,rf=1010,of=1011,er=1012,bl=1013,gi=1014,_n=1015,xr=1016,Sl=1017,wl=1018,hs=1020,af=35902,cf=1021,lf=1022,dn=1023,hf=1024,uf=1025,as=1026,us=1027,El=1028,Do=1029,ff=1030,Al=1031,tg=1032,Tl=1033,Fr=33776,Br=33777,zr=33778,kr=33779,Ga=35840,Wa=35841,Xa=35842,qa=35843,Ya=36196,Za=37492,Ja=37496,$a=37808,Ka=37809,ja=37810,Qa=37811,tc=37812,ec=37813,nc=37814,ic=37815,sc=37816,rc=37817,oc=37818,ac=37819,cc=37820,lc=37821,Hr=36492,hc=36494,uc=36495,df=36283,fc=36284,dc=36285,pc=36286,Hp=2200,Vp=2201,Gp=2202,$r=2300,mc=2301,La=2302,is=2400,ss=2401,Kr=2402,Rl=2500,pf=2501,Wp=0,Xp=1,qp=2,Yp=3200,Zp=3201,eg=3202,ng=3203,Bi=0,Jp=1,ci="",Pn="srgb",Mi="srgb-linear",Cl="display-p3",No="display-p3-linear",jr="linear",Ee="srgb",Qr="rec709",to="p3",ig=0,ts=7680,sg=7681,rg=7682,og=7683,ag=34055,cg=34056,lg=5386,hg=512,ug=513,fg=514,dg=515,pg=516,mg=517,gg=518,Fh=519,$p=512,Kp=513,jp=514,mf=515,Qp=516,tm=517,em=518,nm=519,eo=35044,xg=35048,_g=35040,vg=35045,yg=35049,Mg=35041,bg=35046,Sg=35050,wg=35042,Eg="100",Bh="300 es",Yn=2e3,no=2001,Dn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Df=1234567,cs=Math.PI/180,nr=180/Math.PI;function Sn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[s&255]+en[s>>8&255]+en[s>>16&255]+en[s>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function De(s,t,e){return Math.max(t,Math.min(e,s))}function gf(s,t){return(s%t+t)%t}function Ag(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Tg(s,t,e){return s!==t?(e-s)/(t-s):0}function Vr(s,t,e){return(1-e)*s+e*t}function Rg(s,t,e,n){return Vr(s,t,1-Math.exp(-e*n))}function Cg(s,t=1){return t-Math.abs(gf(s,t*2)-t)}function Pg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Ig(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Lg(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ug(s,t){return s+Math.random()*(t-s)}function Dg(s){return s*(.5-Math.random())}function Ng(s){s!==void 0&&(Df=s);let t=Df+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Og(s){return s*cs}function Fg(s){return s*nr}function Bg(s){return(s&s-1)===0&&s!==0}function zg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function kg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Hg(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ge(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Es={DEG2RAD:cs,RAD2DEG:nr,generateUUID:Sn,clamp:De,euclideanModulo:gf,mapLinear:Ag,inverseLerp:Tg,lerp:Vr,damp:Rg,pingpong:Cg,smoothstep:Pg,smootherstep:Ig,randInt:Lg,randFloat:Ug,randFloatSpread:Dg,seededRandom:Ng,degToRad:Og,radToDeg:Fg,isPowerOfTwo:Bg,ceilPowerOfTwo:zg,floorPowerOfTwo:kg,setQuaternionFromProperEuler:Hg,normalize:ge,denormalize:fn},vt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},me=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],_=i[0],g=i[3],m=i[6],y=i[1],v=i[4],M=i[7],B=i[2],R=i[5],P=i[8];return r[0]=o*_+a*y+c*B,r[3]=o*g+a*v+c*R,r[6]=o*m+a*M+c*P,r[1]=l*_+h*y+u*B,r[4]=l*g+h*v+u*R,r[7]=l*m+h*M+u*P,r[2]=f*_+d*y+p*B,r[5]=f*g+d*v+p*R,r[8]=f*m+d*M+p*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,p=e*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wl.makeScale(t,e)),this}rotate(t){return this.premultiply(Wl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wl=new me;function im(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}var Vg={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function $s(s,t){return new Vg[s](t)}function io(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sm(){let s=io("canvas");return s.style.display="block",s}var Nf={};function Ua(s){s in Nf||(Nf[s]=!0,console.warn(s))}function Gg(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Wg(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xg(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Of=new me().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ff=new me().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mr={[Mi]:{transfer:jr,primaries:Qr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Pn]:{transfer:Ee,primaries:Qr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[No]:{transfer:jr,primaries:to,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Ff),fromReference:s=>s.applyMatrix3(Of)},[Cl]:{transfer:Ee,primaries:to,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ff),fromReference:s=>s.applyMatrix3(Of).convertLinearToSRGB()}},qg=new Set([Mi,No]),be={enabled:!0,_workingColorSpace:Mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!qg.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=Mr[t].toReference,i=Mr[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Mr[s].primaries},getTransfer:function(s){return s===ci?jr:Mr[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(Mr[t].luminanceCoefficients)}};function Qs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Is,gc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Is===void 0&&(Is=io("canvas")),Is.width=t.width,Is.height=t.height;let n=Is.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Is}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=io("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Qs(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qs(e[n]/255)*255):e[n]=Qs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Yg=0,hi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Sn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ql(i[o].image)):r.push(ql(i[o]))}else r=ql(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function ql(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?gc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Zg=0,He=class s extends Dn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=In,i=In,r=ke,o=qn,a=dn,c=Zn,l=s.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=Sn(),this.name="",this.source=new hi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ml)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zr:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case Jr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zr:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case Jr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Ml;He.DEFAULT_ANISOTROPY=1;var ve=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,M=(d+1)/2,B=(m+1)/2,R=(h+f)/4,P=(u+_)/4,z=(p+g)/4;return v>M&&v>B?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=R/n,r=P/n):M>B?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=R/i,r=z/i):B<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(B),n=P/r,i=z/r),this.set(n,i,r,e),this}let y=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xc=class extends Dn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new He(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new hi(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends xc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ir=class extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},zh=class extends En{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new ir(null,t,e,n),this.texture.isRenderTargetTexture=!0}},so=class extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},kh=class extends En{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new so(null,t,e,n),this.texture.isRenderTargetTexture=!0}},on=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==p){let g=1-a,m=c*f+l*d+h*p+u*_,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let B=Math.sqrt(v),R=Math.atan2(B,m*y);g=Math.sin(g*R)/B,a=Math.sin(a*R)/B}let M=a*y;if(c=c*g+f*M,l=l*g+d*M,h=h*g+p*M,u=u*g+_*M,g===1-a){let B=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=B,l*=B,h*=B,u*=B}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+c*d-l*f,t[e+1]=c*p+h*f+l*u-a*d,t[e+2]=l*p+h*d+a*f-c*u,t[e+3]=h*p-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yl.copy(this).projectOnVector(t),this.sub(Yl)}reflect(t){return this.sub(Yl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yl=new L,Bf=new on,Ne=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ho.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ho.copy(n.boundingBox)),Ho.applyMatrix4(t.matrixWorld),this.union(Ho)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),Vo.subVectors(this.max,br),Ls.subVectors(t.a,br),Us.subVectors(t.b,br),Ds.subVectors(t.c,br),bi.subVectors(Us,Ls),Si.subVectors(Ds,Us),Vi.subVectors(Ls,Ds);let e=[0,-bi.z,bi.y,0,-Si.z,Si.y,0,-Vi.z,Vi.y,bi.z,0,-bi.x,Si.z,0,-Si.x,Vi.z,0,-Vi.x,-bi.y,bi.x,0,-Si.y,Si.x,0,-Vi.y,Vi.x,0];return!Zl(e,Ls,Us,Ds,Vo)||(e=[1,0,0,0,1,0,0,0,1],!Zl(e,Ls,Us,Ds,Vo))?!1:(Go.crossVectors(bi,Si),e=[Go.x,Go.y,Go.z],Zl(e,Ls,Us,Ds,Vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ni=[new L,new L,new L,new L,new L,new L,new L,new L],Bn=new L,Ho=new Ne,Ls=new L,Us=new L,Ds=new L,bi=new L,Si=new L,Vi=new L,br=new L,Vo=new L,Go=new L,Gi=new L;function Zl(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Gi.fromArray(s,r);let a=i.x*Math.abs(Gi.x)+i.y*Math.abs(Gi.y)+i.z*Math.abs(Gi.z),c=t.dot(Gi),l=e.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Jg=new Ne,Sr=new L,Jl=new L,Oe=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Jg.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);let e=Sr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Sr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(Jl)),this.expandByPoint(Sr.copy(t.center).sub(Jl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ii=new L,$l=new L,Wo=new L,wi=new L,Kl=new L,Xo=new L,jl=new L,Li=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){$l.copy(t).add(e).multiplyScalar(.5),Wo.copy(e).sub(t).normalize(),wi.copy(this.origin).sub($l);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Wo),a=wi.dot(this.direction),c=-wi.dot(Wo),l=wi.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*c-a,f=o*a-c,p=r*h,u>=0)if(f>=-p)if(f<=p){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy($l).addScaledVector(Wo,f),d}intersectSphere(t,e){ii.subVectors(t.center,this.origin);let n=ii.dot(this.direction),i=ii.dot(ii)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,i,r){Kl.subVectors(e,t),Xo.subVectors(n,t),jl.crossVectors(Kl,Xo);let o=this.direction.dot(jl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,t);let c=a*this.direction.dot(Xo.crossVectors(wi,Xo));if(c<0)return null;let l=a*this.direction.dot(Kl.cross(wi));if(l<0||c+l>o)return null;let h=-a*wi.dot(jl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class s{constructor(t,e,n,i,r,o,a,c,l,h,u,f,d,p,_,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,d,p,_,g)}set(t,e,n,i,r,o,a,c,l,h,u,f,d,p,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ns.setFromMatrixColumn(t,0).length(),r=1/Ns.setFromMatrixColumn(t,1).length(),o=1/Ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+p*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=p+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,p=l*h,_=l*u;e[0]=f+_*a,e[4]=p*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,p=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,_=a*u;e[0]=c*h,e[4]=p*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,p=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+p,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*c,d=o*l,p=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($g,t,Kg)}lookAt(t,e,n){let i=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ei.crossVectors(n,yn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ei.crossVectors(n,yn)),Ei.normalize(),qo.crossVectors(yn,Ei),i[0]=Ei.x,i[4]=qo.x,i[8]=yn.x,i[1]=Ei.y,i[5]=qo.y,i[9]=yn.y,i[2]=Ei.z,i[6]=qo.z,i[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],y=n[3],v=n[7],M=n[11],B=n[15],R=i[0],P=i[4],z=i[8],rt=i[12],b=i[1],T=i[5],et=i[9],nt=i[13],ot=i[2],yt=i[6],it=i[10],wt=i[14],ct=i[3],Ut=i[7],Bt=i[11],Vt=i[15];return r[0]=o*R+a*b+c*ot+l*ct,r[4]=o*P+a*T+c*yt+l*Ut,r[8]=o*z+a*et+c*it+l*Bt,r[12]=o*rt+a*nt+c*wt+l*Vt,r[1]=h*R+u*b+f*ot+d*ct,r[5]=h*P+u*T+f*yt+d*Ut,r[9]=h*z+u*et+f*it+d*Bt,r[13]=h*rt+u*nt+f*wt+d*Vt,r[2]=p*R+_*b+g*ot+m*ct,r[6]=p*P+_*T+g*yt+m*Ut,r[10]=p*z+_*et+g*it+m*Bt,r[14]=p*rt+_*nt+g*wt+m*Vt,r[3]=y*R+v*b+M*ot+B*ct,r[7]=y*P+v*T+M*yt+B*Ut,r[11]=y*z+v*et+M*it+B*Bt,r[15]=y*rt+v*nt+M*wt+B*Vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],_=t[7],g=t[11],m=t[15];return p*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+_*(+e*c*d-e*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+g*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+m*(-i*a*h-e*c*u+e*a*f+i*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],_=t[13],g=t[14],m=t[15],y=u*g*l-_*f*l+_*c*d-a*g*d-u*c*m+a*f*m,v=p*f*l-h*g*l-p*c*d+o*g*d+h*c*m-o*f*m,M=h*_*l-p*u*l+p*a*d-o*_*d-h*a*m+o*u*m,B=p*u*c-h*_*c-p*a*f+o*_*f+h*a*g-o*u*g,R=e*y+n*v+i*M+r*B;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/R;return t[0]=y*P,t[1]=(_*f*r-u*g*r-_*i*d+n*g*d+u*i*m-n*f*m)*P,t[2]=(a*g*r-_*c*r+_*i*l-n*g*l-a*i*m+n*c*m)*P,t[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*P,t[4]=v*P,t[5]=(h*g*r-p*f*r+p*i*d-e*g*d-h*i*m+e*f*m)*P,t[6]=(p*c*r-o*g*r-p*i*l+e*g*l+o*i*m-e*c*m)*P,t[7]=(o*f*r-h*c*r+h*i*l-e*f*l-o*i*d+e*c*d)*P,t[8]=M*P,t[9]=(p*u*r-h*_*r-p*n*d+e*_*d+h*n*m-e*u*m)*P,t[10]=(o*_*r-p*a*r+p*n*l-e*_*l-o*n*m+e*a*m)*P,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*P,t[12]=B*P,t[13]=(h*_*i-p*u*i+p*n*f-e*_*f-h*n*g+e*u*g)*P,t[14]=(p*a*i-o*_*i-p*n*c+e*_*c+o*n*g-e*a*g)*P,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*f+e*a*f)*P,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,p=r*u,_=o*h,g=o*u,m=a*u,y=c*l,v=c*h,M=c*u,B=n.x,R=n.y,P=n.z;return i[0]=(1-(_+m))*B,i[1]=(d+M)*B,i[2]=(p-v)*B,i[3]=0,i[4]=(d-M)*R,i[5]=(1-(f+m))*R,i[6]=(g+y)*R,i[7]=0,i[8]=(p+v)*P,i[9]=(g-y)*P,i[10]=(1-(f+_))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Ns.set(i[0],i[1],i[2]).length(),o=Ns.set(i[4],i[5],i[6]).length(),a=Ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],zn.copy(this);let l=1/r,h=1/o,u=1/a;return zn.elements[0]*=l,zn.elements[1]*=l,zn.elements[2]*=l,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,e.setFromRotationMatrix(zn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Yn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,p;if(a===Yn)d=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===no)d=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Yn){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*l,d=(n+i)*h,p,_;if(a===Yn)p=(o+r)*u,_=-2*u;else if(a===no)p=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ns=new L,zn=new ne,$g=new L(0,0,0),Kg=new L(1,1,1),Ei=new L,qo=new L,yn=new L,zf=new ne,kf=new on,An=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(De(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kf.setFromEuler(this),this.setFromQuaternion(kf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var sr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jg=0,Hf=new L,Os=new on,si=new ne,Yo=new L,wr=new L,Qg=new L,t0=new on,Vf=new L(1,0,0),Gf=new L(0,1,0),Wf=new L(0,0,1),Xf={type:"added"},e0={type:"removed"},Fs={type:"childadded",child:null},Ql={type:"childremoved",child:null},Se=class s extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new An,n=new on,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new me}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.multiply(Os),this}rotateOnWorldAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.premultiply(Os),this}rotateX(t){return this.rotateOnAxis(Vf,t)}rotateY(t){return this.rotateOnAxis(Gf,t)}rotateZ(t){return this.rotateOnAxis(Wf,t)}translateOnAxis(t,e){return Hf.copy(t).applyQuaternion(this.quaternion),this.position.add(Hf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vf,t)}translateY(t){return this.translateOnAxis(Gf,t)}translateZ(t){return this.translateOnAxis(Wf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yo.copy(t):Yo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(wr,Yo,this.up):si.lookAt(Yo,wr,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),Os.setFromRotationMatrix(si),this.quaternion.premultiply(Os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xf),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(e0),Ql.child=t,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xf),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,Qg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Se.DEFAULT_UP=new L(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kn=new L,ri=new L,th=new L,oi=new L,Bs=new L,zs=new L,qf=new L,eh=new L,nh=new L,ih=new L,sh=new ve,rh=new ve,oh=new ve,Xn=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),kn.subVectors(t,e),i.cross(kn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){kn.subVectors(i,e),ri.subVectors(n,e),th.subVectors(t,e);let o=kn.dot(kn),a=kn.dot(ri),c=kn.dot(th),l=ri.dot(ri),h=ri.dot(th),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,p=(o*h-a*c)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,oi.x),c.addScaledVector(o,oi.y),c.addScaledVector(a,oi.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return sh.setScalar(0),rh.setScalar(0),oh.setScalar(0),sh.fromBufferAttribute(t,e),rh.fromBufferAttribute(t,n),oh.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(sh,r.x),o.addScaledVector(rh,r.y),o.addScaledVector(oh,r.z),o}static isFrontFacing(t,e,n,i){return kn.subVectors(n,e),ri.subVectors(t,e),kn.cross(ri).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),kn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Bs.subVectors(i,n),zs.subVectors(r,n),eh.subVectors(t,n);let c=Bs.dot(eh),l=zs.dot(eh);if(c<=0&&l<=0)return e.copy(n);nh.subVectors(t,i);let h=Bs.dot(nh),u=zs.dot(nh);if(h>=0&&u<=h)return e.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Bs,o);ih.subVectors(t,r);let d=Bs.dot(ih),p=zs.dot(ih);if(p>=0&&d<=p)return e.copy(r);let _=d*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(zs,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return qf.subVectors(r,i),a=(u-h)/(u-h+(d-p)),e.copy(i).addScaledVector(qf,a);let m=1/(g+_+f);return o=_*m,a=f*m,e.copy(n).addScaledVector(Bs,o).addScaledVector(zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},rm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function ah(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=be.workingColorSpace){return this.r=t,this.g=e,this.b=n,be.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=be.workingColorSpace){if(t=gf(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ah(o,r,t+1/3),this.g=ah(o,r,t),this.b=ah(o,r,t-1/3)}return be.toWorkingColorSpace(this,i),this}setStyle(t,e=Pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pn){let n=rm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}copyLinearToSRGB(t){return this.r=Xl(t.r),this.g=Xl(t.g),this.b=Xl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pn){return be.fromWorkingColorSpace(nn.copy(this),t),Math.round(De(nn.r*255,0,255))*65536+Math.round(De(nn.g*255,0,255))*256+Math.round(De(nn.b*255,0,255))}getHexString(t=Pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.fromWorkingColorSpace(nn.copy(this),e);let n=nn.r,i=nn.g,r=nn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=be.workingColorSpace){return be.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=Pn){be.fromWorkingColorSpace(nn.copy(this),t);let e=nn.r,n=nn.g,i=nn.b;return t!==Pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(Zo);let n=Vr(Ai.h,Zo.h,e),i=Vr(Ai.s,Zo.s,e),r=Vr(Ai.l,Zo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Gt;Gt.NAMES=rm;var n0=0,Ze=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=os,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Na,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Da&&(n.blendSrc=this.blendSrc),this.blendDst!==Na&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Nn=class extends Ze{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},li=i0();function i0(){let s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function xn(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=De(s,-65504,65504),li.floatView[0]=s;let t=li.uint32View[0],e=t>>23&511;return li.baseTable[e]+((t&8388607)>>li.shiftTable[e])}function Dr(s){let t=s>>10;return li.uint32View[0]=li.mantissaTable[li.offsetTable[t]+(s&1023)]+li.exponentTable[t],li.floatView[0]}var s0={toHalfFloat:xn,fromHalfFloat:Dr},ze=new L,Jo=new vt,Me=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=eo,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Jo.fromBufferAttribute(this,e),Jo.applyMatrix3(t),this.setXY(e,Jo.x,Jo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==eo&&(t.usage=this.usage),t}},Hh=class extends Me{constructor(t,e,n){super(new Int8Array(t),e,n)}},Vh=class extends Me{constructor(t,e,n){super(new Uint8Array(t),e,n)}},Gh=class extends Me{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}},Wh=class extends Me{constructor(t,e,n){super(new Int16Array(t),e,n)}},fs=class extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}},Xh=class extends Me{constructor(t,e,n){super(new Int32Array(t),e,n)}},ds=class extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}},qh=class extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=Dr(this.array[t*this.itemSize]);return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=xn(e),this}getY(t){let e=Dr(this.array[t*this.itemSize+1]);return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=xn(e),this}getZ(t){let e=Dr(this.array[t*this.itemSize+2]);return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=xn(e),this}getW(t){let e=Dr(this.array[t*this.itemSize+3]);return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=xn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=xn(e),this.array[t+1]=xn(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.array[t+0]=xn(e),this.array[t+1]=xn(n),this.array[t+2]=xn(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),r=ge(r,this.array)),this.array[t+0]=xn(e),this.array[t+1]=xn(n),this.array[t+2]=xn(i),this.array[t+3]=xn(r),this}},Yt=class extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}},r0=0,Cn=new ne,ch=new Se,ks=new L,Mn=new Ne,Er=new Ne,qe=new L,he=class s extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(im(t)?ds:fs)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new me().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return ch.lookAt(t),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Yt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ne);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(Mn.min,Er.min),Mn.expandByPoint(qe),qe.addVectors(Mn.max,Er.max),Mn.expandByPoint(qe)):(Mn.expandByPoint(Er.min),Mn.expandByPoint(Er.max))}Mn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)qe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(qe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)qe.fromBufferAttribute(a,l),c&&(ks.fromBufferAttribute(t,l),qe.add(ks)),i=Math.max(i,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Me(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let z=0;z<n.count;z++)a[z]=new L,c[z]=new L;let l=new L,h=new L,u=new L,f=new vt,d=new vt,p=new vt,_=new L,g=new L;function m(z,rt,b){l.fromBufferAttribute(n,z),h.fromBufferAttribute(n,rt),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,z),d.fromBufferAttribute(r,rt),p.fromBufferAttribute(r,b),h.sub(l),u.sub(l),d.sub(f),p.sub(f);let T=1/(d.x*p.y-p.x*d.y);isFinite(T)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(T),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(T),a[z].add(_),a[rt].add(_),a[b].add(_),c[z].add(g),c[rt].add(g),c[b].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let z=0,rt=y.length;z<rt;++z){let b=y[z],T=b.start,et=b.count;for(let nt=T,ot=T+et;nt<ot;nt+=3)m(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}let v=new L,M=new L,B=new L,R=new L;function P(z){B.fromBufferAttribute(i,z),R.copy(B);let rt=a[z];v.copy(rt),v.sub(B.multiplyScalar(B.dot(rt))).normalize(),M.crossVectors(R,rt);let T=M.dot(c[z])<0?-1:1;o.setXYZW(z,v.x,v.y,v.z,T)}for(let z=0,rt=y.length;z<rt;++z){let b=y[z],T=b.start,et=b.count;for(let nt=T,ot=T+et;nt<ot;nt+=3)P(t.getX(nt+0)),P(t.getX(nt+1)),P(t.getX(nt+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,p=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let m=0;m<h;m++)f[p++]=l[d++]}return new Me(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yf=new ne,Wi=new Li,$o=new Oe,Zf=new L,Ko=new L,jo=new L,Qo=new L,lh=new L,ta=new L,Jf=new L,ea=new L,ce=class extends Se{constructor(t=new he,e=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){ta.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(lh.fromBufferAttribute(u,t),o?ta.addScaledVector(lh,h):ta.addScaledVector(lh.sub(e),h))}e.add(ta)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),!($o.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere($o,Zf)===null||Wi.origin.distanceToSquared(Zf)>(t.far-t.near)**2))&&(Yf.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(Yf),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let M=y,B=v;M<B;M+=3){let R=a.getX(M),P=a.getX(M+1),z=a.getX(M+2);i=na(this,m,t,n,l,h,u,R,P,z),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){let y=a.getX(g),v=a.getX(g+1),M=a.getX(g+2);i=na(this,o,t,n,l,h,u,y,v,M),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let M=y,B=v;M<B;M+=3){let R=M,P=M+1,z=M+2;i=na(this,m,t,n,l,h,u,R,P,z),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){let y=g,v=g+1,M=g+2;i=na(this,o,t,n,l,h,u,y,v,M),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function o0(s,t,e,n,i,r,o,a){let c;if(t.side===pn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===pi,a),c===null)return null;ea.copy(a),ea.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(ea);return l<e.near||l>e.far?null:{distance:l,point:ea.clone(),object:s}}function na(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Ko),s.getVertexPosition(c,jo),s.getVertexPosition(l,Qo);let h=o0(s,t,e,n,Ko,jo,Qo,Jf);if(h){let u=new L;Xn.getBarycoord(Jf,Ko,jo,Qo,u),i&&(h.uv=Xn.getInterpolatedAttribute(i,a,c,l,u,new vt)),r&&(h.uv1=Xn.getInterpolatedAttribute(r,a,c,l,u,new vt)),o&&(h.normal=Xn.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new L,materialIndex:0};Xn.getNormal(Ko,jo,Qo,f.normal),h.face=f,h.barycoord=u}return h}var xi=class s extends he{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function p(_,g,m,y,v,M,B,R,P,z,rt){let b=M/P,T=B/z,et=M/2,nt=B/2,ot=R/2,yt=P+1,it=z+1,wt=0,ct=0,Ut=new L;for(let Bt=0;Bt<it;Bt++){let Vt=Bt*T-nt;for(let se=0;se<yt;se++){let fe=se*b-et;Ut[_]=fe*y,Ut[g]=Vt*v,Ut[m]=ot,l.push(Ut.x,Ut.y,Ut.z),Ut[_]=0,Ut[g]=0,Ut[m]=R>0?1:-1,h.push(Ut.x,Ut.y,Ut.z),u.push(se/P),u.push(1-Bt/z),wt+=1}}for(let Bt=0;Bt<z;Bt++)for(let Vt=0;Vt<P;Vt++){let se=f+Vt+yt*Bt,fe=f+Vt+yt*(Bt+1),pt=f+(Vt+1)+yt*(Bt+1),Et=f+(Vt+1)+yt*Bt;c.push(se,fe,Et),c.push(fe,pt,Et),ct+=6}a.addGroup(d,ct,rt),d+=ct,f+=wt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function rr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function un(s){let t={};for(let e=0;e<s.length;e++){let n=rr(s[e]);for(let i in n)t[i]=n[i]}return t}function a0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function om(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}var Oo={clone:rr,merge:un},c0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends Ze{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c0,this.fragmentShader=l0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rr(t.uniforms),this.uniformsGroups=a0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},or=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ti=new L,$f=new vt,Kf=new vt,Be=class extends or{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,$f,Kf),e.subVectors(Kf,$f)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Hs=-90,Vs=1,_c=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Be(Hs,Vs,t,e);i.layers=this.layers,this.add(i);let r=new Be(Hs,Vs,t,e);r.layers=this.layers,this.add(r);let o=new Be(Hs,Vs,t,e);o.layers=this.layers,this.add(o);let a=new Be(Hs,Vs,t,e);a.layers=this.layers,this.add(a);let c=new Be(Hs,Vs,t,e);c.layers=this.layers,this.add(c);let l=new Be(Hs,Vs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===no)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ps=class extends He{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:mi,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vc=class extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ps(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new xi(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:fi});r.uniforms.tEquirect.value=e;let o=new ce(i,r),a=e.minFilter;return e.minFilter===qn&&(e.minFilter=ke),new _c(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},hh=new L,h0=new L,u0=new me,Wn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=hh.subVectors(n,e).cross(h0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(hh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||u0.getNormalMatrix(t),i=this.coplanarPoint(hh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xi=new Oe,ia=new L,ms=class{constructor(t=new Wn,e=new Wn,n=new Wn,i=new Wn,r=new Wn,o=new Wn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],p=i[9],_=i[10],g=i[11],m=i[12],y=i[13],v=i[14],M=i[15];if(n[0].setComponents(c-r,f-l,g-d,M-m).normalize(),n[1].setComponents(c+r,f+l,g+d,M+m).normalize(),n[2].setComponents(c+o,f+h,g+p,M+y).normalize(),n[3].setComponents(c-o,f-h,g-p,M-y).normalize(),n[4].setComponents(c-a,f-u,g-_,M-v).normalize(),e===Yn)n[5].setComponents(c+a,f+u,g+_,M+v).normalize();else if(e===no)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ia.x=i.normal.x>0?t.max.x:t.min.x,ia.y=i.normal.y>0?t.max.y:t.min.y,ia.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function am(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function f0(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],_=u[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let _=u[d];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Jn=class s extends he{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,d=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let y=m*f-o;for(let v=0;v<l;v++){let M=v*u-r;p.push(M,-y,0),_.push(0,0,1),g.push(v/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<a;y++){let v=y+l*m,M=y+l*(m+1),B=y+1+l*(m+1),R=y+1+l*m;d.push(v,M,R),d.push(M,B,R)}this.setIndex(d),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},d0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,m0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,b0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,A0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,T0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,O0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,F0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,B0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G0="gl_FragColor = linearToOutputTexel( gl_FragColor );",W0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Y0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ex=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ox=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ax=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ux=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,px=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ax=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ix=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Kx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,t_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,n_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,o_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,a_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,u_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,f_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,__=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,v_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,y_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,M_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,T_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,I_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,U_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,D_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,F_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,H_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,W_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_e={alphahash_fragment:d0,alphahash_pars_fragment:p0,alphamap_fragment:m0,alphamap_pars_fragment:g0,alphatest_fragment:x0,alphatest_pars_fragment:_0,aomap_fragment:v0,aomap_pars_fragment:y0,batching_pars_vertex:M0,batching_vertex:b0,begin_vertex:S0,beginnormal_vertex:w0,bsdfs:E0,iridescence_fragment:A0,bumpmap_pars_fragment:T0,clipping_planes_fragment:R0,clipping_planes_pars_fragment:C0,clipping_planes_pars_vertex:P0,clipping_planes_vertex:I0,color_fragment:L0,color_pars_fragment:U0,color_pars_vertex:D0,color_vertex:N0,common:O0,cube_uv_reflection_fragment:F0,defaultnormal_vertex:B0,displacementmap_pars_vertex:z0,displacementmap_vertex:k0,emissivemap_fragment:H0,emissivemap_pars_fragment:V0,colorspace_fragment:G0,colorspace_pars_fragment:W0,envmap_fragment:X0,envmap_common_pars_fragment:q0,envmap_pars_fragment:Y0,envmap_pars_vertex:Z0,envmap_physical_pars_fragment:rx,envmap_vertex:J0,fog_vertex:$0,fog_pars_vertex:K0,fog_fragment:j0,fog_pars_fragment:Q0,gradientmap_pars_fragment:tx,lightmap_pars_fragment:ex,lights_lambert_fragment:nx,lights_lambert_pars_fragment:ix,lights_pars_begin:sx,lights_toon_fragment:ox,lights_toon_pars_fragment:ax,lights_phong_fragment:cx,lights_phong_pars_fragment:lx,lights_physical_fragment:hx,lights_physical_pars_fragment:ux,lights_fragment_begin:fx,lights_fragment_maps:dx,lights_fragment_end:px,logdepthbuf_fragment:mx,logdepthbuf_pars_fragment:gx,logdepthbuf_pars_vertex:xx,logdepthbuf_vertex:_x,map_fragment:vx,map_pars_fragment:yx,map_particle_fragment:Mx,map_particle_pars_fragment:bx,metalnessmap_fragment:Sx,metalnessmap_pars_fragment:wx,morphinstance_vertex:Ex,morphcolor_vertex:Ax,morphnormal_vertex:Tx,morphtarget_pars_vertex:Rx,morphtarget_vertex:Cx,normal_fragment_begin:Px,normal_fragment_maps:Ix,normal_pars_fragment:Lx,normal_pars_vertex:Ux,normal_vertex:Dx,normalmap_pars_fragment:Nx,clearcoat_normal_fragment_begin:Ox,clearcoat_normal_fragment_maps:Fx,clearcoat_pars_fragment:Bx,iridescence_pars_fragment:zx,opaque_fragment:kx,packing:Hx,premultiplied_alpha_fragment:Vx,project_vertex:Gx,dithering_fragment:Wx,dithering_pars_fragment:Xx,roughnessmap_fragment:qx,roughnessmap_pars_fragment:Yx,shadowmap_pars_fragment:Zx,shadowmap_pars_vertex:Jx,shadowmap_vertex:$x,shadowmask_pars_fragment:Kx,skinbase_vertex:jx,skinning_pars_vertex:Qx,skinning_vertex:t_,skinnormal_vertex:e_,specularmap_fragment:n_,specularmap_pars_fragment:i_,tonemapping_fragment:s_,tonemapping_pars_fragment:r_,transmission_fragment:o_,transmission_pars_fragment:a_,uv_pars_fragment:c_,uv_pars_vertex:l_,uv_vertex:h_,worldpos_vertex:u_,background_vert:f_,background_frag:d_,backgroundCube_vert:p_,backgroundCube_frag:m_,cube_vert:g_,cube_frag:x_,depth_vert:__,depth_frag:v_,distanceRGBA_vert:y_,distanceRGBA_frag:M_,equirect_vert:b_,equirect_frag:S_,linedashed_vert:w_,linedashed_frag:E_,meshbasic_vert:A_,meshbasic_frag:T_,meshlambert_vert:R_,meshlambert_frag:C_,meshmatcap_vert:P_,meshmatcap_frag:I_,meshnormal_vert:L_,meshnormal_frag:U_,meshphong_vert:D_,meshphong_frag:N_,meshphysical_vert:O_,meshphysical_frag:F_,meshtoon_vert:B_,meshtoon_frag:z_,points_vert:k_,points_frag:H_,shadow_vert:V_,shadow_frag:G_,sprite_vert:W_,sprite_frag:X_},kt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},rn={basic:{uniforms:un([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:un([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:un([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:un([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:un([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:un([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:un([kt.points,kt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:un([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:un([kt.common,kt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:un([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:un([kt.sprite,kt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:un([kt.common,kt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:un([kt.lights,kt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};rn.physical={uniforms:un([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};var sa={r:0,b:0,g:0},qi=new An,q_=new ne;function Y_(s,t,e,n,i,r,o){let a=new Gt(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function p(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1,M=p(y);M===null?m(a,c):M&&M.isColor&&(m(M,1),v=!0);let B=s.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(y,v){let M=p(v);M&&(M.isCubeTexture||M.mapping===gr)?(h===void 0&&(h=new ce(new xi(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:rr(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),qi.copy(v.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(q_.makeRotationFromEuler(qi)),h.material.toneMapped=be.getTransfer(M.colorSpace)!==Ee,(u!==M||f!==M.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,d=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ce(new Jn(2,2),new mn({name:"BackgroundMaterial",uniforms:rr(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=be.getTransfer(M.colorSpace)!==Ee,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,d=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,v){y.getRGB(sa,om(s)),n.buffers.color.setClear(sa.r,sa.g,sa.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(a,c)},render:_,addToRenderList:g}}function Z_(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(b,T,et,nt,ot){let yt=!1,it=u(nt,et,T);r!==it&&(r=it,l(r.object)),yt=d(b,nt,et,ot),yt&&p(b,nt,et,ot),ot!==null&&t.update(ot,s.ELEMENT_ARRAY_BUFFER),(yt||o)&&(o=!1,M(b,T,et,nt),ot!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ot).buffer))}function c(){return s.createVertexArray()}function l(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,T,et){let nt=et.wireframe===!0,ot=n[b.id];ot===void 0&&(ot={},n[b.id]=ot);let yt=ot[T.id];yt===void 0&&(yt={},ot[T.id]=yt);let it=yt[nt];return it===void 0&&(it=f(c()),yt[nt]=it),it}function f(b){let T=[],et=[],nt=[];for(let ot=0;ot<e;ot++)T[ot]=0,et[ot]=0,nt[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:et,attributeDivisors:nt,object:b,attributes:{},index:null}}function d(b,T,et,nt){let ot=r.attributes,yt=T.attributes,it=0,wt=et.getAttributes();for(let ct in wt)if(wt[ct].location>=0){let Bt=ot[ct],Vt=yt[ct];if(Vt===void 0&&(ct==="instanceMatrix"&&b.instanceMatrix&&(Vt=b.instanceMatrix),ct==="instanceColor"&&b.instanceColor&&(Vt=b.instanceColor)),Bt===void 0||Bt.attribute!==Vt||Vt&&Bt.data!==Vt.data)return!0;it++}return r.attributesNum!==it||r.index!==nt}function p(b,T,et,nt){let ot={},yt=T.attributes,it=0,wt=et.getAttributes();for(let ct in wt)if(wt[ct].location>=0){let Bt=yt[ct];Bt===void 0&&(ct==="instanceMatrix"&&b.instanceMatrix&&(Bt=b.instanceMatrix),ct==="instanceColor"&&b.instanceColor&&(Bt=b.instanceColor));let Vt={};Vt.attribute=Bt,Bt&&Bt.data&&(Vt.data=Bt.data),ot[ct]=Vt,it++}r.attributes=ot,r.attributesNum=it,r.index=nt}function _(){let b=r.newAttributes;for(let T=0,et=b.length;T<et;T++)b[T]=0}function g(b){m(b,0)}function m(b,T){let et=r.newAttributes,nt=r.enabledAttributes,ot=r.attributeDivisors;et[b]=1,nt[b]===0&&(s.enableVertexAttribArray(b),nt[b]=1),ot[b]!==T&&(s.vertexAttribDivisor(b,T),ot[b]=T)}function y(){let b=r.newAttributes,T=r.enabledAttributes;for(let et=0,nt=T.length;et<nt;et++)T[et]!==b[et]&&(s.disableVertexAttribArray(et),T[et]=0)}function v(b,T,et,nt,ot,yt,it){it===!0?s.vertexAttribIPointer(b,T,et,ot,yt):s.vertexAttribPointer(b,T,et,nt,ot,yt)}function M(b,T,et,nt){_();let ot=nt.attributes,yt=et.getAttributes(),it=T.defaultAttributeValues;for(let wt in yt){let ct=yt[wt];if(ct.location>=0){let Ut=ot[wt];if(Ut===void 0&&(wt==="instanceMatrix"&&b.instanceMatrix&&(Ut=b.instanceMatrix),wt==="instanceColor"&&b.instanceColor&&(Ut=b.instanceColor)),Ut!==void 0){let Bt=Ut.normalized,Vt=Ut.itemSize,se=t.get(Ut);if(se===void 0)continue;let fe=se.buffer,pt=se.type,Et=se.bytesPerElement,Jt=pt===s.INT||pt===s.UNSIGNED_INT||Ut.gpuType===bl;if(Ut.isInterleavedBufferAttribute){let Ct=Ut.data,re=Ct.stride,ee=Ut.offset;if(Ct.isInstancedInterleavedBuffer){for(let oe=0;oe<ct.locationSize;oe++)m(ct.location+oe,Ct.meshPerAttribute);b.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let oe=0;oe<ct.locationSize;oe++)g(ct.location+oe);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let oe=0;oe<ct.locationSize;oe++)v(ct.location+oe,Vt/ct.locationSize,pt,Bt,re*Et,(ee+Vt/ct.locationSize*oe)*Et,Jt)}else{if(Ut.isInstancedBufferAttribute){for(let Ct=0;Ct<ct.locationSize;Ct++)m(ct.location+Ct,Ut.meshPerAttribute);b.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let Ct=0;Ct<ct.locationSize;Ct++)g(ct.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let Ct=0;Ct<ct.locationSize;Ct++)v(ct.location+Ct,Vt/ct.locationSize,pt,Bt,Vt*Et,Vt/ct.locationSize*Ct*Et,Jt)}}else if(it!==void 0){let Bt=it[wt];if(Bt!==void 0)switch(Bt.length){case 2:s.vertexAttrib2fv(ct.location,Bt);break;case 3:s.vertexAttrib3fv(ct.location,Bt);break;case 4:s.vertexAttrib4fv(ct.location,Bt);break;default:s.vertexAttrib1fv(ct.location,Bt)}}}}y()}function B(){z();for(let b in n){let T=n[b];for(let et in T){let nt=T[et];for(let ot in nt)h(nt[ot].object),delete nt[ot];delete T[et]}delete n[b]}}function R(b){if(n[b.id]===void 0)return;let T=n[b.id];for(let et in T){let nt=T[et];for(let ot in nt)h(nt[ot].object),delete nt[ot];delete T[et]}delete n[b.id]}function P(b){for(let T in n){let et=n[T];if(et[b.id]===void 0)continue;let nt=et[b.id];for(let ot in nt)h(nt[ot].object),delete nt[ot];delete et[b.id]}}function z(){rt(),o=!0,r!==i&&(r=i,l(r.object))}function rt(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:z,resetDefaultState:rt,dispose:B,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function J_(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<l.length;p++)o(l[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];for(let _=0;_<f.length;_++)e.update(p,n,f[_])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function $_(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){return!(P!==dn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let z=P===xr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Zn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==_n&&!z)}function c(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){let P=t.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=p>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:B,maxSamples:R}}function K_(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Wn,a=new me,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):l();else{let y=r?0:n,v=y*4,M=m.clippingState||null;c.value=M,M=h(p,f,v,d);for(let B=0;B!==v;++B)M[B]=e[B];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,p!==!0||g===null){let m=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,M=d;v!==_;++v,M+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(g,M),g[M+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function j_(s){let t=new WeakMap;function e(o,a){return a===qr?o.mapping=mi:a===Yr&&(o.mapping=Ii),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===qr||a===Yr)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new vc(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ar=class extends or{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ks=4,jf=[.125,.215,.35,.446,.526,.582],ns=20,uh=new ar,Qf=new Gt,fh=null,dh=0,ph=0,mh=!1,es=(1+Math.sqrt(5))/2,Gs=1/es,td=[new L(-es,Gs,0),new L(es,Gs,0),new L(-Gs,0,es),new L(Gs,0,es),new L(0,es,-Gs),new L(0,es,Gs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],ro=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fh,dh,ph),this._renderer.xr.enabled=mh,t.scissorTest=!1,ra(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mi||t.mapping===Ii?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:xr,format:dn,colorSpace:Mi,depthBuffer:!1},i=ed(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ed(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q_(r)),this._blurMaterial=tv(r,t,e)}return i}_compileMaterial(t){let e=new ce(this._lodPlanes[0],t);this._renderer.compile(e,uh)}_sceneToCubeUV(t,e,n,i){let a=new Be(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Qf),h.toneMapping=di,h.autoClear=!1;let d=new Nn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),p=new ce(new xi,d),_=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,_=!0):(d.color.copy(Qf),_=!0);for(let m=0;m<6;m++){let y=m%3;y===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):y===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let v=this._cubeSize;ra(i,y*v,m>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===mi||t.mapping===Ii;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=id()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nd());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new ce(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ra(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,uh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=td[(i-r-1)%td.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ce(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ns-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):ns;g>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ns}`);let m=[],y=0;for(let P=0;P<ns;++P){let z=P/_,rt=Math.exp(-z*z/2);m.push(rt),P===0?y+=rt:P<g&&(y+=2*rt)}for(let P=0;P<m.length;P++)m[P]=m[P]/y;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-n;let M=this._sizeLods[i],B=3*M*(i>v-Ks?i-v+Ks:0),R=4*(this._cubeSize-M);ra(e,B,R,3*M,2*M),c.setRenderTarget(e),c.render(u,uh)}};function Q_(s){let t=[],e=[],n=[],i=s,r=s-Ks+1+jf.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Ks?c=jf[o-s+Ks-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,_=3,g=2,m=1,y=new Float32Array(_*p*d),v=new Float32Array(g*p*d),M=new Float32Array(m*p*d);for(let R=0;R<d;R++){let P=R%3*2/3-1,z=R>2?0:-1,rt=[P,z,0,P+2/3,z,0,P+2/3,z+1,0,P,z,0,P+2/3,z+1,0,P,z+1,0];y.set(rt,_*p*R),v.set(f,g*p*R);let b=[R,R,R,R,R,R];M.set(b,m*p*R)}let B=new he;B.setAttribute("position",new Me(y,_)),B.setAttribute("uv",new Me(v,g)),B.setAttribute("faceIndex",new Me(M,m)),t.push(B),i>Ks&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ed(s,t,e){let n=new En(s,t,e);return n.texture.mapping=gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ra(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function tv(s,t,e){let n=new Float32Array(ns),i=new L(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function nd(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function id(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function xf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ev(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===qr||c===Yr,h=c===mi||c===Ii;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ro(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new ro(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function nv(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ua("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function iv(s,t,e,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);for(let p in f.morphAttributes){let _=f.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let p in f)t.update(f[p],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let p in d){let _=d[p];for(let g=0,m=_.length;g<m;g++)t.update(_[g],s.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,p=u.attributes.position,_=0;if(d!==null){let y=d.array;_=d.version;for(let v=0,M=y.length;v<M;v+=3){let B=y[v+0],R=y[v+1],P=y[v+2];f.push(B,R,R,P,P,B)}}else if(p!==void 0){let y=p.array;_=p.version;for(let v=0,M=y.length/3-1;v<M;v+=3){let B=v+0,R=v+1,P=v+2;f.push(B,R,R,P,P,B)}}else return;let g=new(im(f)?ds:fs)(f,1);g.version=_;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function sv(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,p){p!==0&&(s.drawElementsInstanced(n,d,r,f*o,p),e.update(d,n,p))}function h(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];e.update(g,n,1)}function u(f,d,p,_){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/o,d[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,p);let m=0;for(let y=0;y<p;y++)m+=d[y];for(let y=0;y<_.length;y++)e.update(m,n,_[y])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rv(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ov(s,t,e){let n=new WeakMap,i=new ve;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let rt=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",rt)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),_===!0&&(v=3);let M=a.attributes.position.count*v,B=1;M>t.maxTextureSize&&(B=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let R=new Float32Array(M*B*4*u),P=new ir(R,M,B,u);P.type=_n,P.needsUpdate=!0;let z=v*4;for(let b=0;b<u;b++){let T=g[b],et=m[b],nt=y[b],ot=M*B*4*b;for(let yt=0;yt<T.count;yt++){let it=yt*z;d===!0&&(i.fromBufferAttribute(T,yt),R[ot+it+0]=i.x,R[ot+it+1]=i.y,R[ot+it+2]=i.z,R[ot+it+3]=0),p===!0&&(i.fromBufferAttribute(et,yt),R[ot+it+4]=i.x,R[ot+it+5]=i.y,R[ot+it+6]=i.z,R[ot+it+7]=0),_===!0&&(i.fromBufferAttribute(nt,yt),R[ot+it+8]=i.x,R[ot+it+9]=i.y,R[ot+it+10]=i.z,R[ot+it+11]=nt.itemSize===4?i.w:1)}}f={count:u,texture:P,size:new vt(M,B)},n.set(a,f),a.addEventListener("dispose",rt)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let p=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function av(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var oo=class extends He{constructor(t,e,n,i,r,o,a,c,l,h=as){if(h!==as&&h!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===as&&(n=gi),n===void 0&&h===us&&(n=hs),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ye,this.minFilter=c!==void 0?c:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},cm=new He,sd=new oo(1,1),lm=new ir,hm=new so,um=new ps,rd=[],od=[],ad=new Float32Array(16),cd=new Float32Array(9),ld=new Float32Array(4);function _r(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=rd[i];if(r===void 0&&(r=new Float32Array(i),rd[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function We(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Xe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Pl(s,t){let e=od[t];e===void 0&&(e=new Int32Array(t),od[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function cv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function lv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;s.uniform2fv(this.addr,t),Xe(e,t)}}function hv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;s.uniform3fv(this.addr,t),Xe(e,t)}}function uv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;s.uniform4fv(this.addr,t),Xe(e,t)}}function fv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;ld.set(n),s.uniformMatrix2fv(this.addr,!1,ld),Xe(e,n)}}function dv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;cd.set(n),s.uniformMatrix3fv(this.addr,!1,cd),Xe(e,n)}}function pv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;ad.set(n),s.uniformMatrix4fv(this.addr,!1,ad),Xe(e,n)}}function mv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function gv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;s.uniform2iv(this.addr,t),Xe(e,t)}}function xv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;s.uniform3iv(this.addr,t),Xe(e,t)}}function _v(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;s.uniform4iv(this.addr,t),Xe(e,t)}}function vv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function yv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;s.uniform2uiv(this.addr,t),Xe(e,t)}}function Mv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;s.uniform3uiv(this.addr,t),Xe(e,t)}}function bv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;s.uniform4uiv(this.addr,t),Xe(e,t)}}function Sv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(sd.compareFunction=mf,r=sd):r=cm,e.setTexture2D(t||r,i)}function wv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||hm,i)}function Ev(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||um,i)}function Av(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||lm,i)}function Tv(s){switch(s){case 5126:return cv;case 35664:return lv;case 35665:return hv;case 35666:return uv;case 35674:return fv;case 35675:return dv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return xv;case 35669:case 35673:return _v;case 5125:return vv;case 36294:return yv;case 36295:return Mv;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return Av}}function Rv(s,t){s.uniform1fv(this.addr,t)}function Cv(s,t){let e=_r(t,this.size,2);s.uniform2fv(this.addr,e)}function Pv(s,t){let e=_r(t,this.size,3);s.uniform3fv(this.addr,e)}function Iv(s,t){let e=_r(t,this.size,4);s.uniform4fv(this.addr,e)}function Lv(s,t){let e=_r(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Uv(s,t){let e=_r(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Dv(s,t){let e=_r(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Nv(s,t){s.uniform1iv(this.addr,t)}function Ov(s,t){s.uniform2iv(this.addr,t)}function Fv(s,t){s.uniform3iv(this.addr,t)}function Bv(s,t){s.uniform4iv(this.addr,t)}function zv(s,t){s.uniform1uiv(this.addr,t)}function kv(s,t){s.uniform2uiv(this.addr,t)}function Hv(s,t){s.uniform3uiv(this.addr,t)}function Vv(s,t){s.uniform4uiv(this.addr,t)}function Gv(s,t,e){let n=this.cache,i=t.length,r=Pl(e,i);We(n,r)||(s.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||cm,r[o])}function Wv(s,t,e){let n=this.cache,i=t.length,r=Pl(e,i);We(n,r)||(s.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||hm,r[o])}function Xv(s,t,e){let n=this.cache,i=t.length,r=Pl(e,i);We(n,r)||(s.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||um,r[o])}function qv(s,t,e){let n=this.cache,i=t.length,r=Pl(e,i);We(n,r)||(s.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||lm,r[o])}function Yv(s){switch(s){case 5126:return Rv;case 35664:return Cv;case 35665:return Pv;case 35666:return Iv;case 35674:return Lv;case 35675:return Uv;case 35676:return Dv;case 5124:case 35670:return Nv;case 35667:case 35671:return Ov;case 35668:case 35672:return Fv;case 35669:case 35673:return Bv;case 5125:return zv;case 36294:return kv;case 36295:return Hv;case 36296:return Vv;case 35678:case 36198:case 36298:case 36306:case 35682:return Gv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return qv}}var Yh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tv(e.type)}},Zh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yv(e.type)}},Jh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},gh=/(\w+)(\])?(\[|\.)?/g;function hd(s,t){s.seq.push(t),s.map[t.id]=t}function Zv(s,t,e){let n=s.name,i=n.length;for(gh.lastIndex=0;;){let r=gh.exec(n),o=gh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){hd(e,l===void 0?new Yh(a,s,t):new Zh(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Jh(a),hd(e,u)),e=u}}}var tr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Zv(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function ud(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Jv=37297,$v=0;function Kv(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function jv(s){let t=be.getPrimaries(be.workingColorSpace),e=be.getPrimaries(s),n;switch(t===e?n="":t===to&&e===Qr?n="LinearDisplayP3ToLinearSRGB":t===Qr&&e===to&&(n="LinearSRGBToLinearDisplayP3"),s){case Mi:case No:return[n,"LinearTransferOETF"];case Pn:case Cl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function fd(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Kv(s.getShaderSource(t),o)}else return i}function Qv(s,t){let e=jv(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ty(s,t){let e;switch(t){case Up:e="Linear";break;case Dp:e="Reinhard";break;case Np:e="Cineon";break;case Op:e="ACESFilmic";break;case Bp:e="AgX";break;case zp:e="Neutral";break;case Fp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var oa=new L;function ey(){be.getLuminanceCoefficients(oa);let s=oa.x.toFixed(4),t=oa.y.toFixed(4),e=oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ny(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function iy(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sy(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Nr(s){return s!==""}function dd(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function $h(s){return s.replace(ry,ay)}var oy=new Map;function ay(s,t){let e=_e[t];if(e===void 0){let n=oy.get(t);if(n!==void 0)e=_e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $h(e)}var cy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(s){return s.replace(cy,ly)}function ly(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gd(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hy(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===nf?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===yl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function uy(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case mi:case Ii:t="ENVMAP_TYPE_CUBE";break;case gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fy(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ii:t="ENVMAP_MODE_REFRACTION";break}return t}function dy(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Uo:t="ENVMAP_BLENDING_MULTIPLY";break;case Ip:t="ENVMAP_BLENDING_MIX";break;case Lp:t="ENVMAP_BLENDING_ADD";break}return t}function py(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function my(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=hy(e),l=uy(e),h=fy(e),u=dy(e),f=py(e),d=ny(e),p=iy(r),_=i.createProgram(),g,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Nr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Nr).join(`
`),m.length>0&&(m+=`
`)):(g=[gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),m=[gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?_e.tonemapping_pars_fragment:"",e.toneMapping!==di?ty("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,Qv("linearToOutputTexel",e.outputColorSpace),ey(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Nr).join(`
`)),o=$h(o),o=dd(o,e),o=pd(o,e),a=$h(a),a=dd(a,e),a=pd(a,e),o=md(o),a=md(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=y+g+o,M=y+m+a,B=ud(i,i.VERTEX_SHADER,v),R=ud(i,i.FRAGMENT_SHADER,M);i.attachShader(_,B),i.attachShader(_,R),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function P(T){if(s.debug.checkShaderErrors){let et=i.getProgramInfoLog(_).trim(),nt=i.getShaderInfoLog(B).trim(),ot=i.getShaderInfoLog(R).trim(),yt=!0,it=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(yt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,B,R);else{let wt=fd(i,B,"vertex"),ct=fd(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+et+`
`+wt+`
`+ct)}else et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",et):(nt===""||ot==="")&&(it=!1);it&&(T.diagnostics={runnable:yt,programLog:et,vertexShader:{log:nt,prefix:g},fragmentShader:{log:ot,prefix:m}})}i.deleteShader(B),i.deleteShader(R),z=new tr(i,_),rt=sy(i,_)}let z;this.getUniforms=function(){return z===void 0&&P(this),z};let rt;this.getAttributes=function(){return rt===void 0&&P(this),rt};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,Jv)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$v++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=B,this.fragmentShader=R,this}var gy=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jh(t),e.set(t,n)),n}},jh=class{constructor(t){this.id=gy++,this.code=t,this.usedTimes=0}};function xy(s,t,e,n,i,r,o){let a=new sr,c=new Kh,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,d=i.vertexTextures,p=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,T,et,nt,ot){let yt=nt.fog,it=ot.geometry,wt=b.isMeshStandardMaterial?nt.environment:null,ct=(b.isMeshStandardMaterial?e:t).get(b.envMap||wt),Ut=ct&&ct.mapping===gr?ct.image.height:null,Bt=_[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let Vt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,se=Vt!==void 0?Vt.length:0,fe=0;it.morphAttributes.position!==void 0&&(fe=1),it.morphAttributes.normal!==void 0&&(fe=2),it.morphAttributes.color!==void 0&&(fe=3);let pt,Et,Jt,Ct;if(Bt){let C=rn[Bt];pt=C.vertexShader,Et=C.fragmentShader}else pt=b.vertexShader,Et=b.fragmentShader,c.update(b),Jt=c.getVertexShaderID(b),Ct=c.getFragmentShaderID(b);let re=s.getRenderTarget(),ee=ot.isInstancedMesh===!0,oe=ot.isBatchedMesh===!0,Lt=!!b.map,ft=!!b.matcap,D=!!ct,Dt=!!b.aoMap,Ot=!!b.lightMap,Tt=!!b.bumpMap,zt=!!b.normalMap,Qt=!!b.displacementMap,qt=!!b.emissiveMap,I=!!b.metalnessMap,A=!!b.roughnessMap,K=b.anisotropy>0,_t=b.clearcoat>0,Mt=b.dispersion>0,gt=b.iridescence>0,Kt=b.sheen>0,Ft=b.transmission>0,V=K&&!!b.anisotropyMap,dt=_t&&!!b.clearcoatMap,G=_t&&!!b.clearcoatNormalMap,j=_t&&!!b.clearcoatRoughnessMap,lt=gt&&!!b.iridescenceMap,tt=gt&&!!b.iridescenceThicknessMap,$=Kt&&!!b.sheenColorMap,It=Kt&&!!b.sheenRoughnessMap,Nt=!!b.specularMap,ie=!!b.specularColorMap,H=!!b.specularIntensityMap,Rt=Ft&&!!b.transmissionMap,q=Ft&&!!b.thicknessMap,at=!!b.gradientMap,S=!!b.alphaMap,x=b.alphaTest>0,E=!!b.alphaHash,F=!!b.extensions,N=di;b.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(N=s.toneMapping);let U={shaderID:Bt,shaderType:b.type,shaderName:b.name,vertexShader:pt,fragmentShader:Et,defines:b.defines,customVertexShaderID:Jt,customFragmentShaderID:Ct,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:oe,batchingColor:oe&&ot._colorsTexture!==null,instancing:ee,instancingColor:ee&&ot.instanceColor!==null,instancingMorph:ee&&ot.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Mi,alphaToCoverage:!!b.alphaToCoverage,map:Lt,matcap:ft,envMap:D,envMapMode:D&&ct.mapping,envMapCubeUVHeight:Ut,aoMap:Dt,lightMap:Ot,bumpMap:Tt,normalMap:zt,displacementMap:d&&Qt,emissiveMap:qt,normalMapObjectSpace:zt&&b.normalMapType===Jp,normalMapTangentSpace:zt&&b.normalMapType===Bi,metalnessMap:I,roughnessMap:A,anisotropy:K,anisotropyMap:V,clearcoat:_t,clearcoatMap:dt,clearcoatNormalMap:G,clearcoatRoughnessMap:j,dispersion:Mt,iridescence:gt,iridescenceMap:lt,iridescenceThicknessMap:tt,sheen:Kt,sheenColorMap:$,sheenRoughnessMap:It,specularMap:Nt,specularColorMap:ie,specularIntensityMap:H,transmission:Ft,transmissionMap:Rt,thicknessMap:q,gradientMap:at,opaque:b.transparent===!1&&b.blending===os&&b.alphaToCoverage===!1,alphaMap:S,alphaTest:x,alphaHash:E,combine:b.combine,mapUv:Lt&&g(b.map.channel),aoMapUv:Dt&&g(b.aoMap.channel),lightMapUv:Ot&&g(b.lightMap.channel),bumpMapUv:Tt&&g(b.bumpMap.channel),normalMapUv:zt&&g(b.normalMap.channel),displacementMapUv:Qt&&g(b.displacementMap.channel),emissiveMapUv:qt&&g(b.emissiveMap.channel),metalnessMapUv:I&&g(b.metalnessMap.channel),roughnessMapUv:A&&g(b.roughnessMap.channel),anisotropyMapUv:V&&g(b.anisotropyMap.channel),clearcoatMapUv:dt&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:G&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:$&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:It&&g(b.sheenRoughnessMap.channel),specularMapUv:Nt&&g(b.specularMap.channel),specularColorMapUv:ie&&g(b.specularColorMap.channel),specularIntensityMapUv:H&&g(b.specularIntensityMap.channel),transmissionMapUv:Rt&&g(b.transmissionMap.channel),thicknessMapUv:q&&g(b.thicknessMap.channel),alphaMapUv:S&&g(b.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(zt||K),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!it.attributes.uv&&(Lt||S),fog:!!yt,useFog:b.fog===!0,fogExp2:!!yt&&yt.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:ot.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:fe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&et.length>0,shadowMapType:s.shadowMap.type,toneMapping:N,decodeVideoTexture:Lt&&b.map.isVideoTexture===!0&&be.getTransfer(b.map.colorSpace)===Ee,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===bn,flipSided:b.side===pn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:F&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(F&&b.extensions.multiDraw===!0||oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return U.vertexUv1s=l.has(1),U.vertexUv2s=l.has(2),U.vertexUv3s=l.has(3),l.clear(),U}function y(b){let T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(let et in b.defines)T.push(et),T.push(b.defines[et]);return b.isRawShaderMaterial===!1&&(v(T,b),M(T,b),T.push(s.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function v(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function M(b,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),b.push(a.mask)}function B(b){let T=_[b.type],et;if(T){let nt=rn[T];et=Oo.clone(nt.uniforms)}else et=b.uniforms;return et}function R(b,T){let et;for(let nt=0,ot=h.length;nt<ot;nt++){let yt=h[nt];if(yt.cacheKey===T){et=yt,++et.usedTimes;break}}return et===void 0&&(et=new my(s,T,b,r),h.push(et)),et}function P(b){if(--b.usedTimes===0){let T=h.indexOf(b);h[T]=h[h.length-1],h.pop(),b.destroy()}}function z(b){c.remove(b)}function rt(){c.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:B,acquireProgram:R,releaseProgram:P,releaseShaderCache:z,programs:h,dispose:rt}}function _y(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function vy(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function xd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function _d(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,p,_,g){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:_,group:g},s[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=_,m.group=g),t++,m}function a(u,f,d,p,_,g){let m=o(u,f,d,p,_,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function c(u,f,d,p,_,g){let m=o(u,f,d,p,_,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function l(u,f){e.length>1&&e.sort(u||vy),n.length>1&&n.sort(f||xd),i.length>1&&i.sort(f||xd)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function yy(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new _d,s.set(n,[o])):i>=r.length?(o=new _d,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function My(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Gt};break;case"SpotLight":e={position:new L,direction:new L,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function by(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Sy=0;function wy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ey(s){let t=new My,e=by(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let i=new L,r=new ne,o=new ne;function a(l){let h=0,u=0,f=0;for(let rt=0;rt<9;rt++)n.probe[rt].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,y=0,v=0,M=0,B=0,R=0,P=0;l.sort(wy);for(let rt=0,b=l.length;rt<b;rt++){let T=l[rt],et=T.color,nt=T.intensity,ot=T.distance,yt=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=et.r*nt,u+=et.g*nt,f+=et.b*nt;else if(T.isLightProbe){for(let it=0;it<9;it++)n.probe[it].addScaledVector(T.sh.coefficients[it],nt);P++}else if(T.isDirectionalLight){let it=t.get(T);if(it.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let wt=T.shadow,ct=e.get(T);ct.shadowIntensity=wt.intensity,ct.shadowBias=wt.bias,ct.shadowNormalBias=wt.normalBias,ct.shadowRadius=wt.radius,ct.shadowMapSize=wt.mapSize,n.directionalShadow[d]=ct,n.directionalShadowMap[d]=yt,n.directionalShadowMatrix[d]=T.shadow.matrix,y++}n.directional[d]=it,d++}else if(T.isSpotLight){let it=t.get(T);it.position.setFromMatrixPosition(T.matrixWorld),it.color.copy(et).multiplyScalar(nt),it.distance=ot,it.coneCos=Math.cos(T.angle),it.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),it.decay=T.decay,n.spot[_]=it;let wt=T.shadow;if(T.map&&(n.spotLightMap[B]=T.map,B++,wt.updateMatrices(T),T.castShadow&&R++),n.spotLightMatrix[_]=wt.matrix,T.castShadow){let ct=e.get(T);ct.shadowIntensity=wt.intensity,ct.shadowBias=wt.bias,ct.shadowNormalBias=wt.normalBias,ct.shadowRadius=wt.radius,ct.shadowMapSize=wt.mapSize,n.spotShadow[_]=ct,n.spotShadowMap[_]=yt,M++}_++}else if(T.isRectAreaLight){let it=t.get(T);it.color.copy(et).multiplyScalar(nt),it.halfWidth.set(T.width*.5,0,0),it.halfHeight.set(0,T.height*.5,0),n.rectArea[g]=it,g++}else if(T.isPointLight){let it=t.get(T);if(it.color.copy(T.color).multiplyScalar(T.intensity),it.distance=T.distance,it.decay=T.decay,T.castShadow){let wt=T.shadow,ct=e.get(T);ct.shadowIntensity=wt.intensity,ct.shadowBias=wt.bias,ct.shadowNormalBias=wt.normalBias,ct.shadowRadius=wt.radius,ct.shadowMapSize=wt.mapSize,ct.shadowCameraNear=wt.camera.near,ct.shadowCameraFar=wt.camera.far,n.pointShadow[p]=ct,n.pointShadowMap[p]=yt,n.pointShadowMatrix[p]=T.shadow.matrix,v++}n.point[p]=it,p++}else if(T.isHemisphereLight){let it=t.get(T);it.skyColor.copy(T.color).multiplyScalar(nt),it.groundColor.copy(T.groundColor).multiplyScalar(nt),n.hemi[m]=it,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=kt.LTC_FLOAT_1,n.rectAreaLTC2=kt.LTC_FLOAT_2):(n.rectAreaLTC1=kt.LTC_HALF_1,n.rectAreaLTC2=kt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let z=n.hash;(z.directionalLength!==d||z.pointLength!==p||z.spotLength!==_||z.rectAreaLength!==g||z.hemiLength!==m||z.numDirectionalShadows!==y||z.numPointShadows!==v||z.numSpotShadows!==M||z.numSpotMaps!==B||z.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+B-R,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,z.directionalLength=d,z.pointLength=p,z.spotLength=_,z.rectAreaLength=g,z.hemiLength=m,z.numDirectionalShadows=y,z.numPointShadows=v,z.numSpotShadows=M,z.numSpotMaps=B,z.numLightProbes=P,n.version=Sy++)}function c(l,h){let u=0,f=0,d=0,p=0,_=0,g=h.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){let v=l[m];if(v.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),u++}else if(v.isSpotLight){let M=n.spot[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),d++}else if(v.isRectAreaLight){let M=n.rectArea[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function vd(s){let t=new Ey(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Ay(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new vd(s),t.set(i,[a])):r>=o.length?(a=new vd(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ao=class extends Ze{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},co=class extends Ze{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ry=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Cy(s,t,e){let n=new ms,i=new vt,r=new vt,o=new ve,a=new ao({depthPacking:Zp}),c=new co,l={},h=e.maxTextureSize,u={[pi]:pn,[pn]:pi,[bn]:bn},f=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:Ty,fragmentShader:Ry}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new he;p.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ce(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nf;let m=this.type;this.render=function(R,P,z){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;let rt=s.getRenderTarget(),b=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),et=s.state;et.setBlending(fi),et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);let nt=m!==Gn&&this.type===Gn,ot=m===Gn&&this.type!==Gn;for(let yt=0,it=R.length;yt<it;yt++){let wt=R[yt],ct=wt.shadow;if(ct===void 0){console.warn("THREE.WebGLShadowMap:",wt,"has no shadow.");continue}if(ct.autoUpdate===!1&&ct.needsUpdate===!1)continue;i.copy(ct.mapSize);let Ut=ct.getFrameExtents();if(i.multiply(Ut),r.copy(ct.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Ut.x),i.x=r.x*Ut.x,ct.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Ut.y),i.y=r.y*Ut.y,ct.mapSize.y=r.y)),ct.map===null||nt===!0||ot===!0){let Vt=this.type!==Gn?{minFilter:Ye,magFilter:Ye}:{};ct.map!==null&&ct.map.dispose(),ct.map=new En(i.x,i.y,Vt),ct.map.texture.name=wt.name+".shadowMap",ct.camera.updateProjectionMatrix()}s.setRenderTarget(ct.map),s.clear();let Bt=ct.getViewportCount();for(let Vt=0;Vt<Bt;Vt++){let se=ct.getViewport(Vt);o.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),et.viewport(o),ct.updateMatrices(wt,Vt),n=ct.getFrustum(),M(P,z,ct.camera,wt,this.type)}ct.isPointLightShadow!==!0&&this.type===Gn&&y(ct,z),ct.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(rt,b,T)};function y(R,P){let z=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new En(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(P,null,z,f,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(P,null,z,d,_,null)}function v(R,P,z,rt){let b=null,T=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)b=T;else if(b=z.isPointLight===!0?c:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let et=b.uuid,nt=P.uuid,ot=l[et];ot===void 0&&(ot={},l[et]=ot);let yt=ot[nt];yt===void 0&&(yt=b.clone(),ot[nt]=yt,P.addEventListener("dispose",B)),b=yt}if(b.visible=P.visible,b.wireframe=P.wireframe,rt===Gn?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:u[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,z.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let et=s.properties.get(b);et.light=z}return b}function M(R,P,z,rt,b){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===Gn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);let nt=t.update(R),ot=R.material;if(Array.isArray(ot)){let yt=nt.groups;for(let it=0,wt=yt.length;it<wt;it++){let ct=yt[it],Ut=ot[ct.materialIndex];if(Ut&&Ut.visible){let Bt=v(R,Ut,rt,b);R.onBeforeShadow(s,R,P,z,nt,Bt,ct),s.renderBufferDirect(z,null,nt,Bt,R,ct),R.onAfterShadow(s,R,P,z,nt,Bt,ct)}}}else if(ot.visible){let yt=v(R,ot,rt,b);R.onBeforeShadow(s,R,P,z,nt,yt,null),s.renderBufferDirect(z,null,nt,yt,R,null),R.onAfterShadow(s,R,P,z,nt,yt,null)}}let et=R.children;for(let nt=0,ot=et.length;nt<ot;nt++)M(et[nt],P,z,rt,b)}function B(R){R.target.removeEventListener("dispose",B);for(let z in l){let rt=l[z],b=R.target.uuid;b in rt&&(rt[b].dispose(),delete rt[b])}}}var Py={[Oa]:Fa,[Ba]:Ha,[za]:Va,[ls]:ka,[Fa]:Oa,[Ha]:Ba,[Va]:za,[ka]:ls};function Iy(s){function t(){let H=!1,Rt=new ve,q=null,at=new ve(0,0,0,0);return{setMask:function(S){q!==S&&!H&&(s.colorMask(S,S,S,S),q=S)},setLocked:function(S){H=S},setClear:function(S,x,E,F,N){N===!0&&(S*=F,x*=F,E*=F),Rt.set(S,x,E,F),at.equals(Rt)===!1&&(s.clearColor(S,x,E,F),at.copy(Rt))},reset:function(){H=!1,q=null,at.set(-1,0,0,0)}}}function e(){let H=!1,Rt=!1,q=null,at=null,S=null;return{setReversed:function(x){Rt=x},setTest:function(x){x?Jt(s.DEPTH_TEST):Ct(s.DEPTH_TEST)},setMask:function(x){q!==x&&!H&&(s.depthMask(x),q=x)},setFunc:function(x){if(Rt&&(x=Py[x]),at!==x){switch(x){case Oa:s.depthFunc(s.NEVER);break;case Fa:s.depthFunc(s.ALWAYS);break;case Ba:s.depthFunc(s.LESS);break;case ls:s.depthFunc(s.LEQUAL);break;case za:s.depthFunc(s.EQUAL);break;case ka:s.depthFunc(s.GEQUAL);break;case Ha:s.depthFunc(s.GREATER);break;case Va:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}at=x}},setLocked:function(x){H=x},setClear:function(x){S!==x&&(s.clearDepth(x),S=x)},reset:function(){H=!1,q=null,at=null,S=null}}}function n(){let H=!1,Rt=null,q=null,at=null,S=null,x=null,E=null,F=null,N=null;return{setTest:function(U){H||(U?Jt(s.STENCIL_TEST):Ct(s.STENCIL_TEST))},setMask:function(U){Rt!==U&&!H&&(s.stencilMask(U),Rt=U)},setFunc:function(U,C,O){(q!==U||at!==C||S!==O)&&(s.stencilFunc(U,C,O),q=U,at=C,S=O)},setOp:function(U,C,O){(x!==U||E!==C||F!==O)&&(s.stencilOp(U,C,O),x=U,E=C,F=O)},setLocked:function(U){H=U},setClear:function(U){N!==U&&(s.clearStencil(U),N=U)},reset:function(){H=!1,Rt=null,q=null,at=null,S=null,x=null,E=null,F=null,N=null}}}let i=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,f=[],d=null,p=!1,_=null,g=null,m=null,y=null,v=null,M=null,B=null,R=new Gt(0,0,0),P=0,z=!1,rt=null,b=null,T=null,et=null,nt=null,ot=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),yt=!1,it=0,wt=s.getParameter(s.VERSION);wt.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(wt)[1]),yt=it>=1):wt.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(wt)[1]),yt=it>=2);let ct=null,Ut={},Bt=s.getParameter(s.SCISSOR_BOX),Vt=s.getParameter(s.VIEWPORT),se=new ve().fromArray(Bt),fe=new ve().fromArray(Vt);function pt(H,Rt,q,at){let S=new Uint8Array(4),x=s.createTexture();s.bindTexture(H,x),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let E=0;E<q;E++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Rt,0,s.RGBA,1,1,at,0,s.RGBA,s.UNSIGNED_BYTE,S):s.texImage2D(Rt+E,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,S);return x}let Et={};Et[s.TEXTURE_2D]=pt(s.TEXTURE_2D,s.TEXTURE_2D,1),Et[s.TEXTURE_CUBE_MAP]=pt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[s.TEXTURE_2D_ARRAY]=pt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Et[s.TEXTURE_3D]=pt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Jt(s.DEPTH_TEST),r.setFunc(ls),Ot(!1),Tt(Lh),Jt(s.CULL_FACE),D(fi);function Jt(H){l[H]!==!0&&(s.enable(H),l[H]=!0)}function Ct(H){l[H]!==!1&&(s.disable(H),l[H]=!1)}function re(H,Rt){return h[H]!==Rt?(s.bindFramebuffer(H,Rt),h[H]=Rt,H===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Rt),H===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Rt),!0):!1}function ee(H,Rt){let q=f,at=!1;if(H){q=u.get(Rt),q===void 0&&(q=[],u.set(Rt,q));let S=H.textures;if(q.length!==S.length||q[0]!==s.COLOR_ATTACHMENT0){for(let x=0,E=S.length;x<E;x++)q[x]=s.COLOR_ATTACHMENT0+x;q.length=S.length,at=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,at=!0);at&&s.drawBuffers(q)}function oe(H){return d!==H?(s.useProgram(H),d=H,!0):!1}let Lt={[Pi]:s.FUNC_ADD,[pp]:s.FUNC_SUBTRACT,[mp]:s.FUNC_REVERSE_SUBTRACT};Lt[gp]=s.MIN,Lt[xp]=s.MAX;let ft={[_p]:s.ZERO,[vp]:s.ONE,[yp]:s.SRC_COLOR,[Da]:s.SRC_ALPHA,[Ap]:s.SRC_ALPHA_SATURATE,[wp]:s.DST_COLOR,[bp]:s.DST_ALPHA,[Mp]:s.ONE_MINUS_SRC_COLOR,[Na]:s.ONE_MINUS_SRC_ALPHA,[Ep]:s.ONE_MINUS_DST_COLOR,[Sp]:s.ONE_MINUS_DST_ALPHA,[Tp]:s.CONSTANT_COLOR,[Rp]:s.ONE_MINUS_CONSTANT_COLOR,[Cp]:s.CONSTANT_ALPHA,[Pp]:s.ONE_MINUS_CONSTANT_ALPHA};function D(H,Rt,q,at,S,x,E,F,N,U){if(H===fi){p===!0&&(Ct(s.BLEND),p=!1);return}if(p===!1&&(Jt(s.BLEND),p=!0),H!==dp){if(H!==_||U!==z){if((g!==Pi||v!==Pi)&&(s.blendEquation(s.FUNC_ADD),g=Pi,v=Pi),U)switch(H){case os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Uh:s.blendFunc(s.ONE,s.ONE);break;case Dh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Uh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Dh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}m=null,y=null,M=null,B=null,R.set(0,0,0),P=0,_=H,z=U}return}S=S||Rt,x=x||q,E=E||at,(Rt!==g||S!==v)&&(s.blendEquationSeparate(Lt[Rt],Lt[S]),g=Rt,v=S),(q!==m||at!==y||x!==M||E!==B)&&(s.blendFuncSeparate(ft[q],ft[at],ft[x],ft[E]),m=q,y=at,M=x,B=E),(F.equals(R)===!1||N!==P)&&(s.blendColor(F.r,F.g,F.b,N),R.copy(F),P=N),_=H,z=!1}function Dt(H,Rt){H.side===bn?Ct(s.CULL_FACE):Jt(s.CULL_FACE);let q=H.side===pn;Rt&&(q=!q),Ot(q),H.blending===os&&H.transparent===!1?D(fi):D(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),r.setFunc(H.depthFunc),r.setTest(H.depthTest),r.setMask(H.depthWrite),i.setMask(H.colorWrite);let at=H.stencilWrite;o.setTest(at),at&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Qt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Jt(s.SAMPLE_ALPHA_TO_COVERAGE):Ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(H){rt!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),rt=H)}function Tt(H){H!==up?(Jt(s.CULL_FACE),H!==b&&(H===Lh?s.cullFace(s.BACK):H===fp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ct(s.CULL_FACE),b=H}function zt(H){H!==T&&(yt&&s.lineWidth(H),T=H)}function Qt(H,Rt,q){H?(Jt(s.POLYGON_OFFSET_FILL),(et!==Rt||nt!==q)&&(s.polygonOffset(Rt,q),et=Rt,nt=q)):Ct(s.POLYGON_OFFSET_FILL)}function qt(H){H?Jt(s.SCISSOR_TEST):Ct(s.SCISSOR_TEST)}function I(H){H===void 0&&(H=s.TEXTURE0+ot-1),ct!==H&&(s.activeTexture(H),ct=H)}function A(H,Rt,q){q===void 0&&(ct===null?q=s.TEXTURE0+ot-1:q=ct);let at=Ut[q];at===void 0&&(at={type:void 0,texture:void 0},Ut[q]=at),(at.type!==H||at.texture!==Rt)&&(ct!==q&&(s.activeTexture(q),ct=q),s.bindTexture(H,Rt||Et[H]),at.type=H,at.texture=Rt)}function K(){let H=Ut[ct];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function _t(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Mt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function gt(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Kt(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ft(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function V(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function dt(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function G(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function j(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function lt(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function tt(H){se.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),se.copy(H))}function $(H){fe.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),fe.copy(H))}function It(H,Rt){let q=c.get(Rt);q===void 0&&(q=new WeakMap,c.set(Rt,q));let at=q.get(H);at===void 0&&(at=s.getUniformBlockIndex(Rt,H.name),q.set(H,at))}function Nt(H,Rt){let at=c.get(Rt).get(H);a.get(Rt)!==at&&(s.uniformBlockBinding(Rt,at,H.__bindingPointIndex),a.set(Rt,at))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},ct=null,Ut={},h={},u=new WeakMap,f=[],d=null,p=!1,_=null,g=null,m=null,y=null,v=null,M=null,B=null,R=new Gt(0,0,0),P=0,z=!1,rt=null,b=null,T=null,et=null,nt=null,se.set(0,0,s.canvas.width,s.canvas.height),fe.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:Jt,disable:Ct,bindFramebuffer:re,drawBuffers:ee,useProgram:oe,setBlending:D,setMaterial:Dt,setFlipSided:Ot,setCullFace:Tt,setLineWidth:zt,setPolygonOffset:Qt,setScissorTest:qt,activeTexture:I,bindTexture:A,unbindTexture:K,compressedTexImage2D:_t,compressedTexImage3D:Mt,texImage2D:j,texImage3D:lt,updateUBOMapping:It,uniformBlockBinding:Nt,texStorage2D:dt,texStorage3D:G,texSubImage2D:gt,texSubImage3D:Kt,compressedTexSubImage2D:Ft,compressedTexSubImage3D:V,scissor:tt,viewport:$,reset:ie}}function Ly(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function Uy(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function Dy(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function Qh(s,t,e,n){let i=Ny(n);switch(e){case cf:return s*t;case hf:return s*t;case uf:return s*t*2;case El:return s*t/i.components*i.byteLength;case Do:return s*t/i.components*i.byteLength;case ff:return s*t*2/i.components*i.byteLength;case Al:return s*t*2/i.components*i.byteLength;case lf:return s*t*3/i.components*i.byteLength;case dn:return s*t*4/i.components*i.byteLength;case Tl:return s*t*4/i.components*i.byteLength;case Fr:case Br:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zr:case kr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wa:case qa:return Math.max(s,16)*Math.max(t,8)/4;case Ga:case Xa:return Math.max(s,8)*Math.max(t,8)/2;case Ya:case Za:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ja:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ja:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case tc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ec:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case nc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ic:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case sc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case rc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case oc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ac:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case cc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case lc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Hr:case hc:case uc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case df:case fc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case dc:case pc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ny(s){switch(s){case Zn:case rf:return{byteLength:1,components:1};case er:case of:case xr:return{byteLength:2,components:1};case Sl:case wl:return{byteLength:2,components:4};case gi:case bl:case _n:return{byteLength:4,components:1};case af:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}var Oy={contain:Ly,cover:Uy,fill:Dy,getByteLength:Qh};function Fy(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,A){return d?new OffscreenCanvas(I,A):io("canvas")}function _(I,A,K){let _t=1,Mt=qt(I);if((Mt.width>K||Mt.height>K)&&(_t=K/Math.max(Mt.width,Mt.height)),_t<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let gt=Math.floor(_t*Mt.width),Kt=Math.floor(_t*Mt.height);u===void 0&&(u=p(gt,Kt));let Ft=A?p(gt,Kt):u;return Ft.width=gt,Ft.height=Kt,Ft.getContext("2d").drawImage(I,0,0,gt,Kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+gt+"x"+Kt+")."),Ft}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),I;return I}function g(I){return I.generateMipmaps&&I.minFilter!==Ye&&I.minFilter!==ke}function m(I){s.generateMipmap(I)}function y(I,A,K,_t,Mt=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let gt=A;if(A===s.RED&&(K===s.FLOAT&&(gt=s.R32F),K===s.HALF_FLOAT&&(gt=s.R16F),K===s.UNSIGNED_BYTE&&(gt=s.R8)),A===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(gt=s.R8UI),K===s.UNSIGNED_SHORT&&(gt=s.R16UI),K===s.UNSIGNED_INT&&(gt=s.R32UI),K===s.BYTE&&(gt=s.R8I),K===s.SHORT&&(gt=s.R16I),K===s.INT&&(gt=s.R32I)),A===s.RG&&(K===s.FLOAT&&(gt=s.RG32F),K===s.HALF_FLOAT&&(gt=s.RG16F),K===s.UNSIGNED_BYTE&&(gt=s.RG8)),A===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(gt=s.RG8UI),K===s.UNSIGNED_SHORT&&(gt=s.RG16UI),K===s.UNSIGNED_INT&&(gt=s.RG32UI),K===s.BYTE&&(gt=s.RG8I),K===s.SHORT&&(gt=s.RG16I),K===s.INT&&(gt=s.RG32I)),A===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(gt=s.RGB8UI),K===s.UNSIGNED_SHORT&&(gt=s.RGB16UI),K===s.UNSIGNED_INT&&(gt=s.RGB32UI),K===s.BYTE&&(gt=s.RGB8I),K===s.SHORT&&(gt=s.RGB16I),K===s.INT&&(gt=s.RGB32I)),A===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(gt=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(gt=s.RGBA16UI),K===s.UNSIGNED_INT&&(gt=s.RGBA32UI),K===s.BYTE&&(gt=s.RGBA8I),K===s.SHORT&&(gt=s.RGBA16I),K===s.INT&&(gt=s.RGBA32I)),A===s.RGB&&K===s.UNSIGNED_INT_5_9_9_9_REV&&(gt=s.RGB9_E5),A===s.RGBA){let Kt=Mt?jr:be.getTransfer(_t);K===s.FLOAT&&(gt=s.RGBA32F),K===s.HALF_FLOAT&&(gt=s.RGBA16F),K===s.UNSIGNED_BYTE&&(gt=Kt===Ee?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(gt=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(gt=s.RGB5_A1)}return(gt===s.R16F||gt===s.R32F||gt===s.RG16F||gt===s.RG32F||gt===s.RGBA16F||gt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function v(I,A){let K;return I?A===null||A===gi||A===hs?K=s.DEPTH24_STENCIL8:A===_n?K=s.DEPTH32F_STENCIL8:A===er&&(K=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===gi||A===hs?K=s.DEPTH_COMPONENT24:A===_n?K=s.DEPTH_COMPONENT32F:A===er&&(K=s.DEPTH_COMPONENT16),K}function M(I,A){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ye&&I.minFilter!==ke?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function B(I){let A=I.target;A.removeEventListener("dispose",B),P(A),A.isVideoTexture&&h.delete(A)}function R(I){let A=I.target;A.removeEventListener("dispose",R),rt(A)}function P(I){let A=n.get(I);if(A.__webglInit===void 0)return;let K=I.source,_t=f.get(K);if(_t){let Mt=_t[A.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&z(I),Object.keys(_t).length===0&&f.delete(K)}n.remove(I)}function z(I){let A=n.get(I);s.deleteTexture(A.__webglTexture);let K=I.source,_t=f.get(K);delete _t[A.__cacheKey],o.memory.textures--}function rt(I){let A=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(A.__webglFramebuffer[_t]))for(let Mt=0;Mt<A.__webglFramebuffer[_t].length;Mt++)s.deleteFramebuffer(A.__webglFramebuffer[_t][Mt]);else s.deleteFramebuffer(A.__webglFramebuffer[_t]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[_t])}else{if(Array.isArray(A.__webglFramebuffer))for(let _t=0;_t<A.__webglFramebuffer.length;_t++)s.deleteFramebuffer(A.__webglFramebuffer[_t]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _t=0;_t<A.__webglColorRenderbuffer.length;_t++)A.__webglColorRenderbuffer[_t]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[_t]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let K=I.textures;for(let _t=0,Mt=K.length;_t<Mt;_t++){let gt=n.get(K[_t]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(K[_t])}n.remove(I)}let b=0;function T(){b=0}function et(){let I=b;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),b+=1,I}function nt(I){let A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function ot(I,A){let K=n.get(I);if(I.isVideoTexture&&zt(I),I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){let _t=I.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(K,I,A);return}}e.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+A)}function yt(I,A){let K=n.get(I);if(I.version>0&&K.__version!==I.version){fe(K,I,A);return}e.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+A)}function it(I,A){let K=n.get(I);if(I.version>0&&K.__version!==I.version){fe(K,I,A);return}e.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+A)}function wt(I,A){let K=n.get(I);if(I.version>0&&K.__version!==I.version){pt(K,I,A);return}e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+A)}let ct={[Zr]:s.REPEAT,[In]:s.CLAMP_TO_EDGE,[Jr]:s.MIRRORED_REPEAT},Ut={[Ye]:s.NEAREST,[sf]:s.NEAREST_MIPMAP_NEAREST,[Js]:s.NEAREST_MIPMAP_LINEAR,[ke]:s.LINEAR,[Or]:s.LINEAR_MIPMAP_NEAREST,[qn]:s.LINEAR_MIPMAP_LINEAR},Bt={[$p]:s.NEVER,[nm]:s.ALWAYS,[Kp]:s.LESS,[mf]:s.LEQUAL,[jp]:s.EQUAL,[em]:s.GEQUAL,[Qp]:s.GREATER,[tm]:s.NOTEQUAL};function Vt(I,A){if(A.type===_n&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===ke||A.magFilter===Or||A.magFilter===Js||A.magFilter===qn||A.minFilter===ke||A.minFilter===Or||A.minFilter===Js||A.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,ct[A.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,ct[A.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,ct[A.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,Ut[A.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,Ut[A.minFilter]),A.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Bt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ye||A.minFilter!==Js&&A.minFilter!==qn||A.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function se(I,A){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",B));let _t=A.source,Mt=f.get(_t);Mt===void 0&&(Mt={},f.set(_t,Mt));let gt=nt(A);if(gt!==I.__cacheKey){Mt[gt]===void 0&&(Mt[gt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,K=!0),Mt[gt].usedTimes++;let Kt=Mt[I.__cacheKey];Kt!==void 0&&(Mt[I.__cacheKey].usedTimes--,Kt.usedTimes===0&&z(A)),I.__cacheKey=gt,I.__webglTexture=Mt[gt].texture}return K}function fe(I,A,K){let _t=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_t=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_t=s.TEXTURE_3D);let Mt=se(I,A),gt=A.source;e.bindTexture(_t,I.__webglTexture,s.TEXTURE0+K);let Kt=n.get(gt);if(gt.version!==Kt.__version||Mt===!0){e.activeTexture(s.TEXTURE0+K);let Ft=be.getPrimaries(be.workingColorSpace),V=A.colorSpace===ci?null:be.getPrimaries(A.colorSpace),dt=A.colorSpace===ci||Ft===V?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let G=_(A.image,!1,i.maxTextureSize);G=Qt(A,G);let j=r.convert(A.format,A.colorSpace),lt=r.convert(A.type),tt=y(A.internalFormat,j,lt,A.colorSpace,A.isVideoTexture);Vt(_t,A);let $,It=A.mipmaps,Nt=A.isVideoTexture!==!0,ie=Kt.__version===void 0||Mt===!0,H=gt.dataReady,Rt=M(A,G);if(A.isDepthTexture)tt=v(A.format===us,A.type),ie&&(Nt?e.texStorage2D(s.TEXTURE_2D,1,tt,G.width,G.height):e.texImage2D(s.TEXTURE_2D,0,tt,G.width,G.height,0,j,lt,null));else if(A.isDataTexture)if(It.length>0){Nt&&ie&&e.texStorage2D(s.TEXTURE_2D,Rt,tt,It[0].width,It[0].height);for(let q=0,at=It.length;q<at;q++)$=It[q],Nt?H&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,$.width,$.height,j,lt,$.data):e.texImage2D(s.TEXTURE_2D,q,tt,$.width,$.height,0,j,lt,$.data);A.generateMipmaps=!1}else Nt?(ie&&e.texStorage2D(s.TEXTURE_2D,Rt,tt,G.width,G.height),H&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,G.width,G.height,j,lt,G.data)):e.texImage2D(s.TEXTURE_2D,0,tt,G.width,G.height,0,j,lt,G.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Nt&&ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Rt,tt,It[0].width,It[0].height,G.depth);for(let q=0,at=It.length;q<at;q++)if($=It[q],A.format!==dn)if(j!==null)if(Nt){if(H)if(A.layerUpdates.size>0){let S=Qh($.width,$.height,A.format,A.type);for(let x of A.layerUpdates){let E=$.data.subarray(x*S/$.data.BYTES_PER_ELEMENT,(x+1)*S/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,x,$.width,$.height,1,j,E,0,0)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,$.width,$.height,G.depth,j,$.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,tt,$.width,$.height,G.depth,0,$.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?H&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,$.width,$.height,G.depth,j,lt,$.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,tt,$.width,$.height,G.depth,0,j,lt,$.data)}else{Nt&&ie&&e.texStorage2D(s.TEXTURE_2D,Rt,tt,It[0].width,It[0].height);for(let q=0,at=It.length;q<at;q++)$=It[q],A.format!==dn?j!==null?Nt?H&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,$.width,$.height,j,$.data):e.compressedTexImage2D(s.TEXTURE_2D,q,tt,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?H&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,$.width,$.height,j,lt,$.data):e.texImage2D(s.TEXTURE_2D,q,tt,$.width,$.height,0,j,lt,$.data)}else if(A.isDataArrayTexture)if(Nt){if(ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Rt,tt,G.width,G.height,G.depth),H)if(A.layerUpdates.size>0){let q=Qh(G.width,G.height,A.format,A.type);for(let at of A.layerUpdates){let S=G.data.subarray(at*q/G.data.BYTES_PER_ELEMENT,(at+1)*q/G.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,at,G.width,G.height,1,j,lt,S)}A.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,j,lt,G.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,G.width,G.height,G.depth,0,j,lt,G.data);else if(A.isData3DTexture)Nt?(ie&&e.texStorage3D(s.TEXTURE_3D,Rt,tt,G.width,G.height,G.depth),H&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,j,lt,G.data)):e.texImage3D(s.TEXTURE_3D,0,tt,G.width,G.height,G.depth,0,j,lt,G.data);else if(A.isFramebufferTexture){if(ie)if(Nt)e.texStorage2D(s.TEXTURE_2D,Rt,tt,G.width,G.height);else{let q=G.width,at=G.height;for(let S=0;S<Rt;S++)e.texImage2D(s.TEXTURE_2D,S,tt,q,at,0,j,lt,null),q>>=1,at>>=1}}else if(It.length>0){if(Nt&&ie){let q=qt(It[0]);e.texStorage2D(s.TEXTURE_2D,Rt,tt,q.width,q.height)}for(let q=0,at=It.length;q<at;q++)$=It[q],Nt?H&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,j,lt,$):e.texImage2D(s.TEXTURE_2D,q,tt,j,lt,$);A.generateMipmaps=!1}else if(Nt){if(ie){let q=qt(G);e.texStorage2D(s.TEXTURE_2D,Rt,tt,q.width,q.height)}H&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,j,lt,G)}else e.texImage2D(s.TEXTURE_2D,0,tt,j,lt,G);g(A)&&m(_t),Kt.__version=gt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function pt(I,A,K){if(A.image.length!==6)return;let _t=se(I,A),Mt=A.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+K);let gt=n.get(Mt);if(Mt.version!==gt.__version||_t===!0){e.activeTexture(s.TEXTURE0+K);let Kt=be.getPrimaries(be.workingColorSpace),Ft=A.colorSpace===ci?null:be.getPrimaries(A.colorSpace),V=A.colorSpace===ci||Kt===Ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);let dt=A.isCompressedTexture||A.image[0].isCompressedTexture,G=A.image[0]&&A.image[0].isDataTexture,j=[];for(let at=0;at<6;at++)!dt&&!G?j[at]=_(A.image[at],!0,i.maxCubemapSize):j[at]=G?A.image[at].image:A.image[at],j[at]=Qt(A,j[at]);let lt=j[0],tt=r.convert(A.format,A.colorSpace),$=r.convert(A.type),It=y(A.internalFormat,tt,$,A.colorSpace),Nt=A.isVideoTexture!==!0,ie=gt.__version===void 0||_t===!0,H=Mt.dataReady,Rt=M(A,lt);Vt(s.TEXTURE_CUBE_MAP,A);let q;if(dt){Nt&&ie&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,It,lt.width,lt.height);for(let at=0;at<6;at++){q=j[at].mipmaps;for(let S=0;S<q.length;S++){let x=q[S];A.format!==dn?tt!==null?Nt?H&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,S,0,0,x.width,x.height,tt,x.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,S,It,x.width,x.height,0,x.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?H&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,S,0,0,x.width,x.height,tt,$,x.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,S,It,x.width,x.height,0,tt,$,x.data)}}}else{if(q=A.mipmaps,Nt&&ie){q.length>0&&Rt++;let at=qt(j[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,It,at.width,at.height)}for(let at=0;at<6;at++)if(G){Nt?H&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,j[at].width,j[at].height,tt,$,j[at].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,It,j[at].width,j[at].height,0,tt,$,j[at].data);for(let S=0;S<q.length;S++){let E=q[S].image[at].image;Nt?H&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,S+1,0,0,E.width,E.height,tt,$,E.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,S+1,It,E.width,E.height,0,tt,$,E.data)}}else{Nt?H&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,tt,$,j[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,It,tt,$,j[at]);for(let S=0;S<q.length;S++){let x=q[S];Nt?H&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,S+1,0,0,tt,$,x.image[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,S+1,It,tt,$,x.image[at])}}}g(A)&&m(s.TEXTURE_CUBE_MAP),gt.__version=Mt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Et(I,A,K,_t,Mt,gt){let Kt=r.convert(K.format,K.colorSpace),Ft=r.convert(K.type),V=y(K.internalFormat,Kt,Ft,K.colorSpace);if(!n.get(A).__hasExternalTextures){let G=Math.max(1,A.width>>gt),j=Math.max(1,A.height>>gt);Mt===s.TEXTURE_3D||Mt===s.TEXTURE_2D_ARRAY?e.texImage3D(Mt,gt,V,G,j,A.depth,0,Kt,Ft,null):e.texImage2D(Mt,gt,V,G,j,0,Kt,Ft,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),Tt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_t,Mt,n.get(K).__webglTexture,0,Ot(A)):(Mt===s.TEXTURE_2D||Mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_t,Mt,n.get(K).__webglTexture,gt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Jt(I,A,K){if(s.bindRenderbuffer(s.RENDERBUFFER,I),A.depthBuffer){let _t=A.depthTexture,Mt=_t&&_t.isDepthTexture?_t.type:null,gt=v(A.stencilBuffer,Mt),Kt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ft=Ot(A);Tt(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ft,gt,A.width,A.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,gt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,gt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Kt,s.RENDERBUFFER,I)}else{let _t=A.textures;for(let Mt=0;Mt<_t.length;Mt++){let gt=_t[Mt],Kt=r.convert(gt.format,gt.colorSpace),Ft=r.convert(gt.type),V=y(gt.internalFormat,Kt,Ft,gt.colorSpace),dt=Ot(A);K&&Tt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,V,A.width,A.height):Tt(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,V,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,V,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ot(A.depthTexture,0);let _t=n.get(A.depthTexture).__webglTexture,Mt=Ot(A);if(A.depthTexture.format===as)Tt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_t,0,Mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_t,0);else if(A.depthTexture.format===us)Tt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_t,0,Mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function re(I){let A=n.get(I),K=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){let _t=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),_t){let Mt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,_t.removeEventListener("dispose",Mt)};_t.addEventListener("dispose",Mt),A.__depthDisposeCallback=Mt}A.__boundDepthTexture=_t}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Ct(A.__webglFramebuffer,I)}else if(K){A.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[_t]),A.__webglDepthbuffer[_t]===void 0)A.__webglDepthbuffer[_t]=s.createRenderbuffer(),Jt(A.__webglDepthbuffer[_t],I,!1);else{let Mt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=A.__webglDepthbuffer[_t];s.bindRenderbuffer(s.RENDERBUFFER,gt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,gt)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Jt(A.__webglDepthbuffer,I,!1);else{let _t=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,Mt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ee(I,A,K){let _t=n.get(I);A!==void 0&&Et(_t.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&re(I)}function oe(I){let A=I.texture,K=n.get(I),_t=n.get(A);I.addEventListener("dispose",R);let Mt=I.textures,gt=I.isWebGLCubeRenderTarget===!0,Kt=Mt.length>1;if(Kt||(_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture()),_t.__version=A.version,o.memory.textures++),gt){K.__webglFramebuffer=[];for(let Ft=0;Ft<6;Ft++)if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer[Ft]=[];for(let V=0;V<A.mipmaps.length;V++)K.__webglFramebuffer[Ft][V]=s.createFramebuffer()}else K.__webglFramebuffer[Ft]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ft=0;Ft<A.mipmaps.length;Ft++)K.__webglFramebuffer[Ft]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Kt)for(let Ft=0,V=Mt.length;Ft<V;Ft++){let dt=n.get(Mt[Ft]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&Tt(I)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ft=0;Ft<Mt.length;Ft++){let V=Mt[Ft];K.__webglColorRenderbuffer[Ft]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[Ft]);let dt=r.convert(V.format,V.colorSpace),G=r.convert(V.type),j=y(V.internalFormat,dt,G,V.colorSpace,I.isXRRenderTarget===!0),lt=Ot(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,j,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.RENDERBUFFER,K.__webglColorRenderbuffer[Ft])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Jt(K.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(gt){e.bindTexture(s.TEXTURE_CUBE_MAP,_t.__webglTexture),Vt(s.TEXTURE_CUBE_MAP,A);for(let Ft=0;Ft<6;Ft++)if(A.mipmaps&&A.mipmaps.length>0)for(let V=0;V<A.mipmaps.length;V++)Et(K.__webglFramebuffer[Ft][V],I,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,V);else Et(K.__webglFramebuffer[Ft],I,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0);g(A)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Kt){for(let Ft=0,V=Mt.length;Ft<V;Ft++){let dt=Mt[Ft],G=n.get(dt);e.bindTexture(s.TEXTURE_2D,G.__webglTexture),Vt(s.TEXTURE_2D,dt),Et(K.__webglFramebuffer,I,dt,s.COLOR_ATTACHMENT0+Ft,s.TEXTURE_2D,0),g(dt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let Ft=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ft=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Ft,_t.__webglTexture),Vt(Ft,A),A.mipmaps&&A.mipmaps.length>0)for(let V=0;V<A.mipmaps.length;V++)Et(K.__webglFramebuffer[V],I,A,s.COLOR_ATTACHMENT0,Ft,V);else Et(K.__webglFramebuffer,I,A,s.COLOR_ATTACHMENT0,Ft,0);g(A)&&m(Ft),e.unbindTexture()}I.depthBuffer&&re(I)}function Lt(I){let A=I.textures;for(let K=0,_t=A.length;K<_t;K++){let Mt=A[K];if(g(Mt)){let gt=I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Kt=n.get(Mt).__webglTexture;e.bindTexture(gt,Kt),m(gt),e.unbindTexture()}}}let ft=[],D=[];function Dt(I){if(I.samples>0){if(Tt(I)===!1){let A=I.textures,K=I.width,_t=I.height,Mt=s.COLOR_BUFFER_BIT,gt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Kt=n.get(I),Ft=A.length>1;if(Ft)for(let V=0;V<A.length;V++)e.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+V,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+V,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let V=0;V<A.length;V++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Mt|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Mt|=s.STENCIL_BUFFER_BIT)),Ft){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Kt.__webglColorRenderbuffer[V]);let dt=n.get(A[V]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,dt,0)}s.blitFramebuffer(0,0,K,_t,0,0,K,_t,Mt,s.NEAREST),c===!0&&(ft.length=0,D.length=0,ft.push(s.COLOR_ATTACHMENT0+V),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ft.push(gt),D.push(gt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ft)for(let V=0;V<A.length;V++){e.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+V,s.RENDERBUFFER,Kt.__webglColorRenderbuffer[V]);let dt=n.get(A[V]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+V,s.TEXTURE_2D,dt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let A=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Ot(I){return Math.min(i.maxSamples,I.samples)}function Tt(I){let A=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function zt(I){let A=o.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function Qt(I,A){let K=I.colorSpace,_t=I.format,Mt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==Mi&&K!==ci&&(be.getTransfer(K)===Ee?(_t!==dn||Mt!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),A}function qt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=et,this.resetTextureUnits=T,this.setTexture2D=ot,this.setTexture2DArray=yt,this.setTexture3D=it,this.setTextureCube=wt,this.rebindTextures=ee,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Tt}function fm(s,t){function e(n,i=ci){let r,o=be.getTransfer(i);if(n===Zn)return s.UNSIGNED_BYTE;if(n===Sl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===wl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===af)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===rf)return s.BYTE;if(n===of)return s.SHORT;if(n===er)return s.UNSIGNED_SHORT;if(n===bl)return s.INT;if(n===gi)return s.UNSIGNED_INT;if(n===_n)return s.FLOAT;if(n===xr)return s.HALF_FLOAT;if(n===cf)return s.ALPHA;if(n===lf)return s.RGB;if(n===dn)return s.RGBA;if(n===hf)return s.LUMINANCE;if(n===uf)return s.LUMINANCE_ALPHA;if(n===as)return s.DEPTH_COMPONENT;if(n===us)return s.DEPTH_STENCIL;if(n===El)return s.RED;if(n===Do)return s.RED_INTEGER;if(n===ff)return s.RG;if(n===Al)return s.RG_INTEGER;if(n===Tl)return s.RGBA_INTEGER;if(n===Fr||n===Br||n===zr||n===kr)if(o===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ga||n===Wa||n===Xa||n===qa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ya||n===Za||n===Ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ya||n===Za)return o===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ja)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$a||n===Ka||n===ja||n===Qa||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$a)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ka)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ja)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tc)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ec)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nc)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ic)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sc)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rc)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oc)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ac)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cc)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lc)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hr||n===hc||n===uc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Hr)return o===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===df||n===fc||n===dc||n===pc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Hr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var yc=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ge=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},By={type:"move"},Gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(By)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ky=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,tu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new He,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new mn({vertexShader:zy,fragmentShader:ky,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ce(new Jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eu=class extends Dn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null,_=new tu,g=e.getContextAttributes(),m=null,y=null,v=[],M=[],B=new vt,R=null,P=new Be;P.layers.enable(1),P.viewport=new ve;let z=new Be;z.layers.enable(2),z.viewport=new ve;let rt=[P,z],b=new yc;b.layers.enable(1),b.layers.enable(2);let T=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pt){let Et=v[pt];return Et===void 0&&(Et=new Gr,v[pt]=Et),Et.getTargetRaySpace()},this.getControllerGrip=function(pt){let Et=v[pt];return Et===void 0&&(Et=new Gr,v[pt]=Et),Et.getGripSpace()},this.getHand=function(pt){let Et=v[pt];return Et===void 0&&(Et=new Gr,v[pt]=Et),Et.getHandSpace()};function nt(pt){let Et=M.indexOf(pt.inputSource);if(Et===-1)return;let Jt=v[Et];Jt!==void 0&&(Jt.update(pt.inputSource,pt.frame,l||o),Jt.dispatchEvent({type:pt.type,data:pt.inputSource}))}function ot(){i.removeEventListener("select",nt),i.removeEventListener("selectstart",nt),i.removeEventListener("selectend",nt),i.removeEventListener("squeeze",nt),i.removeEventListener("squeezestart",nt),i.removeEventListener("squeezeend",nt),i.removeEventListener("end",ot),i.removeEventListener("inputsourceschange",yt);for(let pt=0;pt<v.length;pt++){let Et=M[pt];Et!==null&&(M[pt]=null,v[pt].disconnect(Et))}T=null,et=null,_.reset(),t.setRenderTarget(m),d=null,f=null,u=null,i=null,y=null,fe.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pt){r=pt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pt){a=pt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(pt){l=pt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(pt){if(i=pt,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",nt),i.addEventListener("selectstart",nt),i.addEventListener("selectend",nt),i.addEventListener("squeeze",nt),i.addEventListener("squeezestart",nt),i.addEventListener("squeezeend",nt),i.addEventListener("end",ot),i.addEventListener("inputsourceschange",yt),g.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(B),i.renderState.layers===void 0){let Et={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,Et),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new En(d.framebufferWidth,d.framebufferHeight,{format:dn,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Et=null,Jt=null,Ct=null;g.depth&&(Ct=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=g.stencil?us:as,Jt=g.stencil?hs:gi);let re={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(re),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new En(f.textureWidth,f.textureHeight,{format:dn,type:Zn,depthTexture:new oo(f.textureWidth,f.textureHeight,Jt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function yt(pt){for(let Et=0;Et<pt.removed.length;Et++){let Jt=pt.removed[Et],Ct=M.indexOf(Jt);Ct>=0&&(M[Ct]=null,v[Ct].disconnect(Jt))}for(let Et=0;Et<pt.added.length;Et++){let Jt=pt.added[Et],Ct=M.indexOf(Jt);if(Ct===-1){for(let ee=0;ee<v.length;ee++)if(ee>=M.length){M.push(Jt),Ct=ee;break}else if(M[ee]===null){M[ee]=Jt,Ct=ee;break}if(Ct===-1)break}let re=v[Ct];re&&re.connect(Jt)}}let it=new L,wt=new L;function ct(pt,Et,Jt){it.setFromMatrixPosition(Et.matrixWorld),wt.setFromMatrixPosition(Jt.matrixWorld);let Ct=it.distanceTo(wt),re=Et.projectionMatrix.elements,ee=Jt.projectionMatrix.elements,oe=re[14]/(re[10]-1),Lt=re[14]/(re[10]+1),ft=(re[9]+1)/re[5],D=(re[9]-1)/re[5],Dt=(re[8]-1)/re[0],Ot=(ee[8]+1)/ee[0],Tt=oe*Dt,zt=oe*Ot,Qt=Ct/(-Dt+Ot),qt=Qt*-Dt;if(Et.matrixWorld.decompose(pt.position,pt.quaternion,pt.scale),pt.translateX(qt),pt.translateZ(Qt),pt.matrixWorld.compose(pt.position,pt.quaternion,pt.scale),pt.matrixWorldInverse.copy(pt.matrixWorld).invert(),re[10]===-1)pt.projectionMatrix.copy(Et.projectionMatrix),pt.projectionMatrixInverse.copy(Et.projectionMatrixInverse);else{let I=oe+Qt,A=Lt+Qt,K=Tt-qt,_t=zt+(Ct-qt),Mt=ft*Lt/A*I,gt=D*Lt/A*I;pt.projectionMatrix.makePerspective(K,_t,Mt,gt,I,A),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert()}}function Ut(pt,Et){Et===null?pt.matrixWorld.copy(pt.matrix):pt.matrixWorld.multiplyMatrices(Et.matrixWorld,pt.matrix),pt.matrixWorldInverse.copy(pt.matrixWorld).invert()}this.updateCamera=function(pt){if(i===null)return;let Et=pt.near,Jt=pt.far;_.texture!==null&&(_.depthNear>0&&(Et=_.depthNear),_.depthFar>0&&(Jt=_.depthFar)),b.near=z.near=P.near=Et,b.far=z.far=P.far=Jt,(T!==b.near||et!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),T=b.near,et=b.far);let Ct=pt.parent,re=b.cameras;Ut(b,Ct);for(let ee=0;ee<re.length;ee++)Ut(re[ee],Ct);re.length===2?ct(b,P,z):b.projectionMatrix.copy(P.projectionMatrix),Bt(pt,b,Ct)};function Bt(pt,Et,Jt){Jt===null?pt.matrix.copy(Et.matrixWorld):(pt.matrix.copy(Jt.matrixWorld),pt.matrix.invert(),pt.matrix.multiply(Et.matrixWorld)),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.updateMatrixWorld(!0),pt.projectionMatrix.copy(Et.projectionMatrix),pt.projectionMatrixInverse.copy(Et.projectionMatrixInverse),pt.isPerspectiveCamera&&(pt.fov=nr*2*Math.atan(1/pt.projectionMatrix.elements[5]),pt.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(pt){c=pt,f!==null&&(f.fixedFoveation=pt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=pt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let Vt=null;function se(pt,Et){if(h=Et.getViewerPose(l||o),p=Et,h!==null){let Jt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Ct=!1;Jt.length!==b.cameras.length&&(b.cameras.length=0,Ct=!0);for(let ee=0;ee<Jt.length;ee++){let oe=Jt[ee],Lt=null;if(d!==null)Lt=d.getViewport(oe);else{let D=u.getViewSubImage(f,oe);Lt=D.viewport,ee===0&&(t.setRenderTargetTextures(y,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(y))}let ft=rt[ee];ft===void 0&&(ft=new Be,ft.layers.enable(ee),ft.viewport=new ve,rt[ee]=ft),ft.matrix.fromArray(oe.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(oe.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),ee===0&&(b.matrix.copy(ft.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Ct===!0&&b.cameras.push(ft)}let re=i.enabledFeatures;if(re&&re.includes("depth-sensing")){let ee=u.getDepthInformation(Jt[0]);ee&&ee.isValid&&ee.texture&&_.init(t,ee,i.renderState)}}for(let Jt=0;Jt<v.length;Jt++){let Ct=M[Jt],re=v[Jt];Ct!==null&&re!==void 0&&re.update(Ct,Et,l||o)}Vt&&Vt(pt,Et),Et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Et}),p=null}let fe=new am;fe.setAnimationLoop(se),this.setAnimationLoop=function(pt){Vt=pt},this.dispose=function(){}}},Yi=new An,Hy=new ne;function Vy(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,om(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,y,v,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,y,v):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===pn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===pn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=t.get(m),v=y.envMap,M=y.envMapRotation;v&&(g.envMap.value=v,Yi.copy(M),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),g.envMapRotation.value.setFromMatrix4(Hy.makeRotationFromEuler(Yi)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,y,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=v*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gy(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){let M=v.program;n.uniformBlockBinding(y,M)}function l(y,v){let M=i[y.id];M===void 0&&(p(y),M=h(y),i[y.id]=M,y.addEventListener("dispose",g));let B=v.program;n.updateUBOMapping(y,B);let R=t.render.frame;r[y.id]!==R&&(f(y),r[y.id]=R)}function h(y){let v=u();y.__bindingPointIndex=v;let M=s.createBuffer(),B=y.__size,R=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,B,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=i[y.id],M=y.uniforms,B=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let R=0,P=M.length;R<P;R++){let z=Array.isArray(M[R])?M[R]:[M[R]];for(let rt=0,b=z.length;rt<b;rt++){let T=z[rt];if(d(T,R,rt,B)===!0){let et=T.__offset,nt=Array.isArray(T.value)?T.value:[T.value],ot=0;for(let yt=0;yt<nt.length;yt++){let it=nt[yt],wt=_(it);typeof it=="number"||typeof it=="boolean"?(T.__data[0]=it,s.bufferSubData(s.UNIFORM_BUFFER,et+ot,T.__data)):it.isMatrix3?(T.__data[0]=it.elements[0],T.__data[1]=it.elements[1],T.__data[2]=it.elements[2],T.__data[3]=0,T.__data[4]=it.elements[3],T.__data[5]=it.elements[4],T.__data[6]=it.elements[5],T.__data[7]=0,T.__data[8]=it.elements[6],T.__data[9]=it.elements[7],T.__data[10]=it.elements[8],T.__data[11]=0):(it.toArray(T.__data,ot),ot+=wt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,et,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,v,M,B){let R=y.value,P=v+"_"+M;if(B[P]===void 0)return typeof R=="number"||typeof R=="boolean"?B[P]=R:B[P]=R.clone(),!0;{let z=B[P];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return B[P]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function p(y){let v=y.uniforms,M=0,B=16;for(let P=0,z=v.length;P<z;P++){let rt=Array.isArray(v[P])?v[P]:[v[P]];for(let b=0,T=rt.length;b<T;b++){let et=rt[b],nt=Array.isArray(et.value)?et.value:[et.value];for(let ot=0,yt=nt.length;ot<yt;ot++){let it=nt[ot],wt=_(it),ct=M%B,Ut=ct%wt.boundary,Bt=ct+Ut;M+=Ut,Bt!==0&&B-Bt<wt.storage&&(M+=B-Bt),et.__data=new Float32Array(wt.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=M,M+=wt.storage}}}let R=M%B;return R>0&&(M+=B-R),y.__size=M,y.__cache={},this}function _(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function g(y){let v=y.target;v.removeEventListener("dispose",g);let M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}var lo=class{constructor(t={}){let{canvas:e=sm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let d=new Uint32Array(4),p=new Int32Array(4),_=null,g=null,m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pn,this.toneMapping=di,this.toneMappingExposure=1;let v=this,M=!1,B=0,R=0,P=null,z=-1,rt=null,b=new ve,T=new ve,et=null,nt=new Gt(0),ot=0,yt=e.width,it=e.height,wt=1,ct=null,Ut=null,Bt=new ve(0,0,yt,it),Vt=new ve(0,0,yt,it),se=!1,fe=new ms,pt=!1,Et=!1,Jt=new ne,Ct=new ne,re=new L,ee=new ve,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function ft(){return P===null?wt:1}let D=n;function Dt(w,k){return e.getContext(w,k)}try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vl}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",S,!1),e.addEventListener("webglcontextcreationerror",x,!1),D===null){let k="webgl2";if(D=Dt(k,w),D===null)throw Dt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ot,Tt,zt,Qt,qt,I,A,K,_t,Mt,gt,Kt,Ft,V,dt,G,j,lt,tt,$,It,Nt,ie,H;function Rt(){Ot=new nv(D),Ot.init(),Nt=new fm(D,Ot),Tt=new $_(D,Ot,t,Nt),zt=new Iy(D),Tt.reverseDepthBuffer&&zt.buffers.depth.setReversed(!0),Qt=new rv(D),qt=new _y,I=new Fy(D,Ot,zt,qt,Tt,Nt,Qt),A=new j_(v),K=new ev(v),_t=new f0(D),ie=new Z_(D,_t),Mt=new iv(D,_t,Qt,ie),gt=new av(D,Mt,_t,Qt),tt=new ov(D,Tt,I),G=new K_(qt),Kt=new xy(v,A,K,Ot,Tt,ie,G),Ft=new Vy(v,qt),V=new yy,dt=new Ay(Ot),lt=new Y_(v,A,K,zt,gt,f,c),j=new Cy(v,gt,Tt),H=new Gy(D,Qt,Tt,zt),$=new J_(D,Ot,Qt),It=new sv(D,Ot,Qt),Qt.programs=Kt.programs,v.capabilities=Tt,v.extensions=Ot,v.properties=qt,v.renderLists=V,v.shadowMap=j,v.state=zt,v.info=Qt}Rt();let q=new eu(v,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=Ot.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ot.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return wt},this.setPixelRatio=function(w){w!==void 0&&(wt=w,this.setSize(yt,it,!1))},this.getSize=function(w){return w.set(yt,it)},this.setSize=function(w,k,Z=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}yt=w,it=k,e.width=Math.floor(w*wt),e.height=Math.floor(k*wt),Z===!0&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(yt*wt,it*wt).floor()},this.setDrawingBufferSize=function(w,k,Z){yt=w,it=k,wt=Z,e.width=Math.floor(w*Z),e.height=Math.floor(k*Z),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy(Bt)},this.setViewport=function(w,k,Z,Y){w.isVector4?Bt.set(w.x,w.y,w.z,w.w):Bt.set(w,k,Z,Y),zt.viewport(b.copy(Bt).multiplyScalar(wt).round())},this.getScissor=function(w){return w.copy(Vt)},this.setScissor=function(w,k,Z,Y){w.isVector4?Vt.set(w.x,w.y,w.z,w.w):Vt.set(w,k,Z,Y),zt.scissor(T.copy(Vt).multiplyScalar(wt).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(w){zt.setScissorTest(se=w)},this.setOpaqueSort=function(w){ct=w},this.setTransparentSort=function(w){Ut=w},this.getClearColor=function(w){return w.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(w=!0,k=!0,Z=!0){let Y=0;if(w){let W=!1;if(P!==null){let ht=P.texture.format;W=ht===Tl||ht===Al||ht===Do}if(W){let ht=P.texture.type,xt=ht===Zn||ht===gi||ht===er||ht===hs||ht===Sl||ht===wl,ut=lt.getClearColor(),Pt=lt.getClearAlpha(),Ht=ut.r,jt=ut.g,Xt=ut.b;xt?(d[0]=Ht,d[1]=jt,d[2]=Xt,d[3]=Pt,D.clearBufferuiv(D.COLOR,0,d)):(p[0]=Ht,p[1]=jt,p[2]=Xt,p[3]=Pt,D.clearBufferiv(D.COLOR,0,p))}else Y|=D.COLOR_BUFFER_BIT}k&&(Y|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Z&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",S,!1),e.removeEventListener("webglcontextcreationerror",x,!1),V.dispose(),dt.dispose(),qt.dispose(),A.dispose(),K.dispose(),gt.dispose(),ie.dispose(),H.dispose(),Kt.dispose(),q.dispose(),q.removeEventListener("sessionstart",J),q.removeEventListener("sessionend",Q),X.stop()};function at(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function S(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let w=Qt.autoReset,k=j.enabled,Z=j.autoUpdate,Y=j.needsUpdate,W=j.type;Rt(),Qt.autoReset=w,j.enabled=k,j.autoUpdate=Z,j.needsUpdate=Y,j.type=W}function x(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function E(w){let k=w.target;k.removeEventListener("dispose",E),F(k)}function F(w){N(w),qt.remove(w)}function N(w){let k=qt.get(w).programs;k!==void 0&&(k.forEach(function(Z){Kt.releaseProgram(Z)}),w.isShaderMaterial&&Kt.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,Z,Y,W,ht){k===null&&(k=oe);let xt=W.isMesh&&W.matrixWorld.determinant()<0,ut=ln(w,k,Z,Y,W);zt.setMaterial(Y,xt);let Pt=Z.index,Ht=1;if(Y.wireframe===!0){if(Pt=Mt.getWireframeAttribute(Z),Pt===void 0)return;Ht=2}let jt=Z.drawRange,Xt=Z.attributes.position,le=jt.start*Ht,$t=(jt.start+jt.count)*Ht;ht!==null&&(le=Math.max(le,ht.start*Ht),$t=Math.min($t,(ht.start+ht.count)*Ht)),Pt!==null?(le=Math.max(le,0),$t=Math.min($t,Pt.count)):Xt!=null&&(le=Math.max(le,0),$t=Math.min($t,Xt.count));let pe=$t-le;if(pe<0||pe===1/0)return;ie.setup(W,Y,ut,Z,Pt);let Re,xe=$;if(Pt!==null&&(Re=_t.get(Pt),xe=It,xe.setIndex(Re)),W.isMesh)Y.wireframe===!0?(zt.setLineWidth(Y.wireframeLinewidth*ft()),xe.setMode(D.LINES)):xe.setMode(D.TRIANGLES);else if(W.isLine){let te=Y.linewidth;te===void 0&&(te=1),zt.setLineWidth(te*ft()),W.isLineSegments?xe.setMode(D.LINES):W.isLineLoop?xe.setMode(D.LINE_LOOP):xe.setMode(D.LINE_STRIP)}else W.isPoints?xe.setMode(D.POINTS):W.isSprite&&xe.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)xe.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))xe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let te=W._multiDrawStarts,Ae=W._multiDrawCounts,ye=W._multiDrawCount,Ve=Pt?_t.get(Pt).bytesPerElement:1,gn=qt.get(Y).currentProgram.getUniforms();for(let Ie=0;Ie<ye;Ie++)gn.setValue(D,"_gl_DrawID",Ie),xe.render(te[Ie]/Ve,Ae[Ie])}else if(W.isInstancedMesh)xe.renderInstances(le,pe,W.count);else if(Z.isInstancedBufferGeometry){let te=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ae=Math.min(Z.instanceCount,te);xe.renderInstances(le,pe,Ae)}else xe.render(le,pe)};function U(w,k,Z){w.transparent===!0&&w.side===bn&&w.forceSinglePass===!1?(w.side=pn,w.needsUpdate=!0,ue(w,k,Z),w.side=pi,w.needsUpdate=!0,ue(w,k,Z),w.side=bn):ue(w,k,Z)}this.compile=function(w,k,Z=null){Z===null&&(Z=w),g=dt.get(Z),g.init(k),y.push(g),Z.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),w!==Z&&w.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();let Y=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ht=W.material;if(ht)if(Array.isArray(ht))for(let xt=0;xt<ht.length;xt++){let ut=ht[xt];U(ut,Z,W),Y.add(ut)}else U(ht,Z,W),Y.add(ht)}),y.pop(),g=null,Y},this.compileAsync=function(w,k,Z=null){let Y=this.compile(w,k,Z);return new Promise(W=>{function ht(){if(Y.forEach(function(xt){qt.get(xt).currentProgram.isReady()&&Y.delete(xt)}),Y.size===0){W(w);return}setTimeout(ht,10)}Ot.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let C=null;function O(w){C&&C(w)}function J(){X.stop()}function Q(){X.start()}let X=new am;X.setAnimationLoop(O),typeof self<"u"&&X.setContext(self),this.setAnimationLoop=function(w){C=w,q.setAnimationLoop(w),w===null?X.stop():X.start()},q.addEventListener("sessionstart",J),q.addEventListener("sessionend",Q),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(k),k=q.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,k,P),g=dt.get(w,y.length),g.init(k),y.push(g),Ct.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),fe.setFromProjectionMatrix(Ct),Et=this.localClippingEnabled,pt=G.init(this.clippingPlanes,Et),_=V.get(w,m.length),_.init(),m.push(_),q.enabled===!0&&q.isPresenting===!0){let ht=v.xr.getDepthSensingMesh();ht!==null&&mt(ht,k,-1/0,v.sortObjects)}mt(w,k,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(ct,Ut),Lt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Lt&&lt.addToRenderList(_,w),this.info.render.frame++,pt===!0&&G.beginShadows();let Z=g.state.shadowsArray;j.render(Z,w,k),pt===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=_.opaque,W=_.transmissive;if(g.setupLights(),k.isArrayCamera){let ht=k.cameras;if(W.length>0)for(let xt=0,ut=ht.length;xt<ut;xt++){let Pt=ht[xt];bt(Y,W,w,Pt)}Lt&&lt.render(w);for(let xt=0,ut=ht.length;xt<ut;xt++){let Pt=ht[xt];st(_,w,Pt,Pt.viewport)}}else W.length>0&&bt(Y,W,w,k),Lt&&lt.render(w),st(_,w,k);P!==null&&(I.updateMultisampleRenderTarget(P),I.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(v,w,k),ie.resetDefaultState(),z=-1,rt=null,y.pop(),y.length>0?(g=y[y.length-1],pt===!0&&G.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function mt(w,k,Z,Y){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||fe.intersectsSprite(w)){Y&&ee.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ct);let xt=gt.update(w),ut=w.material;ut.visible&&_.push(w,xt,ut,Z,ee.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||fe.intersectsObject(w))){let xt=gt.update(w),ut=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ee.copy(w.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),ee.copy(xt.boundingSphere.center)),ee.applyMatrix4(w.matrixWorld).applyMatrix4(Ct)),Array.isArray(ut)){let Pt=xt.groups;for(let Ht=0,jt=Pt.length;Ht<jt;Ht++){let Xt=Pt[Ht],le=ut[Xt.materialIndex];le&&le.visible&&_.push(w,xt,le,Z,ee.z,Xt)}}else ut.visible&&_.push(w,xt,ut,Z,ee.z,null)}}let ht=w.children;for(let xt=0,ut=ht.length;xt<ut;xt++)mt(ht[xt],k,Z,Y)}function st(w,k,Z,Y){let W=w.opaque,ht=w.transmissive,xt=w.transparent;g.setupLightsView(Z),pt===!0&&G.setGlobalState(v.clippingPlanes,Z),Y&&zt.viewport(b.copy(Y)),W.length>0&&Wt(W,k,Z),ht.length>0&&Wt(ht,k,Z),xt.length>0&&Wt(xt,k,Z),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function bt(w,k,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Y.id]===void 0&&(g.state.transmissionRenderTarget[Y.id]=new En(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?xr:Zn,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));let ht=g.state.transmissionRenderTarget[Y.id],xt=Y.viewport||b;ht.setSize(xt.z,xt.w);let ut=v.getRenderTarget();v.setRenderTarget(ht),v.getClearColor(nt),ot=v.getClearAlpha(),ot<1&&v.setClearColor(16777215,.5),v.clear(),Lt&&lt.render(Z);let Pt=v.toneMapping;v.toneMapping=di;let Ht=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),g.setupLightsView(Y),pt===!0&&G.setGlobalState(v.clippingPlanes,Y),Wt(w,Z,Y),I.updateMultisampleRenderTarget(ht),I.updateRenderTargetMipmap(ht),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Xt=0,le=k.length;Xt<le;Xt++){let $t=k[Xt],pe=$t.object,Re=$t.geometry,xe=$t.material,te=$t.group;if(xe.side===bn&&pe.layers.test(Y.layers)){let Ae=xe.side;xe.side=pn,xe.needsUpdate=!0,St(pe,Z,Y,Re,xe,te),xe.side=Ae,xe.needsUpdate=!0,jt=!0}}jt===!0&&(I.updateMultisampleRenderTarget(ht),I.updateRenderTargetMipmap(ht))}v.setRenderTarget(ut),v.setClearColor(nt,ot),Ht!==void 0&&(Y.viewport=Ht),v.toneMapping=Pt}function Wt(w,k,Z){let Y=k.isScene===!0?k.overrideMaterial:null;for(let W=0,ht=w.length;W<ht;W++){let xt=w[W],ut=xt.object,Pt=xt.geometry,Ht=Y===null?xt.material:Y,jt=xt.group;ut.layers.test(Z.layers)&&St(ut,k,Z,Pt,Ht,jt)}}function St(w,k,Z,Y,W,ht){w.onBeforeRender(v,k,Z,Y,W,ht),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(v,k,Z,Y,w,ht),W.transparent===!0&&W.side===bn&&W.forceSinglePass===!1?(W.side=pn,W.needsUpdate=!0,v.renderBufferDirect(Z,k,Y,W,w,ht),W.side=pi,W.needsUpdate=!0,v.renderBufferDirect(Z,k,Y,W,w,ht),W.side=bn):v.renderBufferDirect(Z,k,Y,W,w,ht),w.onAfterRender(v,k,Z,Y,W,ht)}function ue(w,k,Z){k.isScene!==!0&&(k=oe);let Y=qt.get(w),W=g.state.lights,ht=g.state.shadowsArray,xt=W.state.version,ut=Kt.getParameters(w,W.state,ht,k,Z),Pt=Kt.getProgramCacheKey(ut),Ht=Y.programs;Y.environment=w.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(w.isMeshStandardMaterial?K:A).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Ht===void 0&&(w.addEventListener("dispose",E),Ht=new Map,Y.programs=Ht);let jt=Ht.get(Pt);if(jt!==void 0){if(Y.currentProgram===jt&&Y.lightsStateVersion===xt)return Te(w,ut),jt}else ut.uniforms=Kt.getUniforms(w),w.onBeforeCompile(ut,v),jt=Kt.acquireProgram(ut,Pt),Ht.set(Pt,jt),Y.uniforms=ut.uniforms;let Xt=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xt.clippingPlanes=G.uniform),Te(w,ut),Y.needsLights=ae(w),Y.lightsStateVersion=xt,Y.needsLights&&(Xt.ambientLightColor.value=W.state.ambient,Xt.lightProbe.value=W.state.probe,Xt.directionalLights.value=W.state.directional,Xt.directionalLightShadows.value=W.state.directionalShadow,Xt.spotLights.value=W.state.spot,Xt.spotLightShadows.value=W.state.spotShadow,Xt.rectAreaLights.value=W.state.rectArea,Xt.ltc_1.value=W.state.rectAreaLTC1,Xt.ltc_2.value=W.state.rectAreaLTC2,Xt.pointLights.value=W.state.point,Xt.pointLightShadows.value=W.state.pointShadow,Xt.hemisphereLights.value=W.state.hemi,Xt.directionalShadowMap.value=W.state.directionalShadowMap,Xt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Xt.spotShadowMap.value=W.state.spotShadowMap,Xt.spotLightMatrix.value=W.state.spotLightMatrix,Xt.spotLightMap.value=W.state.spotLightMap,Xt.pointShadowMap.value=W.state.pointShadowMap,Xt.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=jt,Y.uniformsList=null,jt}function de(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=tr.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Te(w,k){let Z=qt.get(w);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function ln(w,k,Z,Y,W){k.isScene!==!0&&(k=oe),I.resetTextureUnits();let ht=k.fog,xt=Y.isMeshStandardMaterial?k.environment:null,ut=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Mi,Pt=(Y.isMeshStandardMaterial?K:A).get(Y.envMap||xt),Ht=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,jt=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Xt=!!Z.morphAttributes.position,le=!!Z.morphAttributes.normal,$t=!!Z.morphAttributes.color,pe=di;Y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(pe=v.toneMapping);let Re=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xe=Re!==void 0?Re.length:0,te=qt.get(Y),Ae=g.state.lights;if(pt===!0&&(Et===!0||w!==rt)){let tn=w===rt&&Y.id===z;G.setState(Y,w,tn)}let ye=!1;Y.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Ae.state.version||te.outputColorSpace!==ut||W.isBatchedMesh&&te.batching===!1||!W.isBatchedMesh&&te.batching===!0||W.isBatchedMesh&&te.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&te.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&te.instancing===!1||!W.isInstancedMesh&&te.instancing===!0||W.isSkinnedMesh&&te.skinning===!1||!W.isSkinnedMesh&&te.skinning===!0||W.isInstancedMesh&&te.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&te.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&te.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&te.instancingMorph===!1&&W.morphTexture!==null||te.envMap!==Pt||Y.fog===!0&&te.fog!==ht||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==G.numPlanes||te.numIntersection!==G.numIntersection)||te.vertexAlphas!==Ht||te.vertexTangents!==jt||te.morphTargets!==Xt||te.morphNormals!==le||te.morphColors!==$t||te.toneMapping!==pe||te.morphTargetsCount!==xe)&&(ye=!0):(ye=!0,te.__version=Y.version);let Ve=te.currentProgram;ye===!0&&(Ve=ue(Y,k,W));let gn=!1,Ie=!1,Ps=!1,Ce=Ve.getUniforms(),Fn=te.uniforms;if(zt.useProgram(Ve.program)&&(gn=!0,Ie=!0,Ps=!0),Y.id!==z&&(z=Y.id,Ie=!0),gn||rt!==w){Tt.reverseDepthBuffer?(Jt.copy(w.projectionMatrix),Wg(Jt),Xg(Jt),Ce.setValue(D,"projectionMatrix",Jt)):Ce.setValue(D,"projectionMatrix",w.projectionMatrix),Ce.setValue(D,"viewMatrix",w.matrixWorldInverse);let tn=Ce.map.cameraPosition;tn!==void 0&&tn.setValue(D,re.setFromMatrixPosition(w.matrixWorld)),Tt.logarithmicDepthBuffer&&Ce.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ce.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),rt!==w&&(rt=w,Ie=!0,Ps=!0)}if(W.isSkinnedMesh){Ce.setOptional(D,W,"bindMatrix"),Ce.setOptional(D,W,"bindMatrixInverse");let tn=W.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ce.setValue(D,"boneTexture",tn.boneTexture,I))}W.isBatchedMesh&&(Ce.setOptional(D,W,"batchingTexture"),Ce.setValue(D,"batchingTexture",W._matricesTexture,I),Ce.setOptional(D,W,"batchingIdTexture"),Ce.setValue(D,"batchingIdTexture",W._indirectTexture,I),Ce.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null&&Ce.setValue(D,"batchingColorTexture",W._colorsTexture,I));let ei=Z.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&tt.update(W,Z,Ve),(Ie||te.receiveShadow!==W.receiveShadow)&&(te.receiveShadow=W.receiveShadow,Ce.setValue(D,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Fn.envMap.value=Pt,Fn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(Fn.envMapIntensity.value=k.environmentIntensity),Ie&&(Ce.setValue(D,"toneMappingExposure",v.toneMappingExposure),te.needsLights&&At(Fn,Ps),ht&&Y.fog===!0&&Ft.refreshFogUniforms(Fn,ht),Ft.refreshMaterialUniforms(Fn,Y,wt,it,g.state.transmissionRenderTarget[w.id]),tr.upload(D,de(te),Fn,I)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(tr.upload(D,de(te),Fn,I),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ce.setValue(D,"center",W.center),Ce.setValue(D,"modelViewMatrix",W.modelViewMatrix),Ce.setValue(D,"normalMatrix",W.normalMatrix),Ce.setValue(D,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let tn=Y.uniformsGroups;for(let Hi=0,kl=tn.length;Hi<kl;Hi++){let ko=tn[Hi];H.update(ko,Ve),H.bind(ko,Ve)}}return Ve}function At(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function ae(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,k,Z){qt.get(w.texture).__webglTexture=k,qt.get(w.depthTexture).__webglTexture=Z;let Y=qt.get(w);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=Z===void 0,Y.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){let Z=qt.get(w);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,Z=0){P=w,B=k,R=Z;let Y=!0,W=null,ht=!1,xt=!1;if(w){let Pt=qt.get(w);if(Pt.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1;else if(Pt.__webglFramebuffer===void 0)I.setupRenderTarget(w);else if(Pt.__hasExternalTextures)I.rebindTextures(w,qt.get(w.texture).__webglTexture,qt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Xt=w.depthTexture;if(Pt.__boundDepthTexture!==Xt){if(Xt!==null&&qt.has(Xt)&&(w.width!==Xt.image.width||w.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(w)}}let Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(xt=!0);let jt=qt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(jt[k])?W=jt[k][Z]:W=jt[k],ht=!0):w.samples>0&&I.useMultisampledRTT(w)===!1?W=qt.get(w).__webglMultisampledFramebuffer:Array.isArray(jt)?W=jt[Z]:W=jt,b.copy(w.viewport),T.copy(w.scissor),et=w.scissorTest}else b.copy(Bt).multiplyScalar(wt).floor(),T.copy(Vt).multiplyScalar(wt).floor(),et=se;if(zt.bindFramebuffer(D.FRAMEBUFFER,W)&&Y&&zt.drawBuffers(w,W),zt.viewport(b),zt.scissor(T),zt.setScissorTest(et),ht){let Pt=qt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pt.__webglTexture,Z)}else if(xt){let Pt=qt.get(w.texture),Ht=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.__webglTexture,Z||0,Ht)}z=-1},this.readRenderTargetPixels=function(w,k,Z,Y,W,ht,xt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=qt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xt!==void 0&&(ut=ut[xt]),ut){zt.bindFramebuffer(D.FRAMEBUFFER,ut);try{let Pt=w.texture,Ht=Pt.format,jt=Pt.type;if(!Tt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-Y&&Z>=0&&Z<=w.height-W&&D.readPixels(k,Z,Y,W,Nt.convert(Ht),Nt.convert(jt),ht)}finally{let Pt=P!==null?qt.get(P).__webglFramebuffer:null;zt.bindFramebuffer(D.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(w,k,Z,Y,W,ht,xt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=qt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xt!==void 0&&(ut=ut[xt]),ut){let Pt=w.texture,Ht=Pt.format,jt=Pt.type;if(!Tt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-Y&&Z>=0&&Z<=w.height-W){zt.bindFramebuffer(D.FRAMEBUFFER,ut);let Xt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Xt),D.bufferData(D.PIXEL_PACK_BUFFER,ht.byteLength,D.STREAM_READ),D.readPixels(k,Z,Y,W,Nt.convert(Ht),Nt.convert(jt),0);let le=P!==null?qt.get(P).__webglFramebuffer:null;zt.bindFramebuffer(D.FRAMEBUFFER,le);let $t=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Gg(D,$t,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Xt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ht),D.deleteBuffer(Xt),D.deleteSync($t),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,Z=0){w.isTexture!==!0&&(Ua("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);let Y=Math.pow(2,-Z),W=Math.floor(w.image.width*Y),ht=Math.floor(w.image.height*Y),xt=k!==null?k.x:0,ut=k!==null?k.y:0;I.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,Z,0,0,xt,ut,W,ht),zt.unbindTexture()},this.copyTextureToTexture=function(w,k,Z=null,Y=null,W=0){w.isTexture!==!0&&(Ua("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,w=arguments[1],k=arguments[2],W=arguments[3]||0,Z=null);let ht,xt,ut,Pt,Ht,jt;Z!==null?(ht=Z.max.x-Z.min.x,xt=Z.max.y-Z.min.y,ut=Z.min.x,Pt=Z.min.y):(ht=w.image.width,xt=w.image.height,ut=0,Pt=0),Y!==null?(Ht=Y.x,jt=Y.y):(Ht=0,jt=0);let Xt=Nt.convert(k.format),le=Nt.convert(k.type);I.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);let $t=D.getParameter(D.UNPACK_ROW_LENGTH),pe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Re=D.getParameter(D.UNPACK_SKIP_PIXELS),xe=D.getParameter(D.UNPACK_SKIP_ROWS),te=D.getParameter(D.UNPACK_SKIP_IMAGES),Ae=w.isCompressedTexture?w.mipmaps[W]:w.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ae.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ae.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ut),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pt),w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,W,Ht,jt,ht,xt,Xt,le,Ae.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,W,Ht,jt,Ae.width,Ae.height,Xt,Ae.data):D.texSubImage2D(D.TEXTURE_2D,W,Ht,jt,ht,xt,Xt,le,Ae),D.pixelStorei(D.UNPACK_ROW_LENGTH,$t),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Re),D.pixelStorei(D.UNPACK_SKIP_ROWS,xe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,te),W===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),zt.unbindTexture()},this.copyTextureToTexture3D=function(w,k,Z=null,Y=null,W=0){w.isTexture!==!0&&(Ua("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,Y=arguments[1]||null,w=arguments[2],k=arguments[3],W=arguments[4]||0);let ht,xt,ut,Pt,Ht,jt,Xt,le,$t,pe=w.isCompressedTexture?w.mipmaps[W]:w.image;Z!==null?(ht=Z.max.x-Z.min.x,xt=Z.max.y-Z.min.y,ut=Z.max.z-Z.min.z,Pt=Z.min.x,Ht=Z.min.y,jt=Z.min.z):(ht=pe.width,xt=pe.height,ut=pe.depth,Pt=0,Ht=0,jt=0),Y!==null?(Xt=Y.x,le=Y.y,$t=Y.z):(Xt=0,le=0,$t=0);let Re=Nt.convert(k.format),xe=Nt.convert(k.type),te;if(k.isData3DTexture)I.setTexture3D(k,0),te=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)I.setTexture2DArray(k,0),te=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);let Ae=D.getParameter(D.UNPACK_ROW_LENGTH),ye=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ve=D.getParameter(D.UNPACK_SKIP_PIXELS),gn=D.getParameter(D.UNPACK_SKIP_ROWS),Ie=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ht),D.pixelStorei(D.UNPACK_SKIP_IMAGES,jt),w.isDataTexture||w.isData3DTexture?D.texSubImage3D(te,W,Xt,le,$t,ht,xt,ut,Re,xe,pe.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(te,W,Xt,le,$t,ht,xt,ut,Re,pe.data):D.texSubImage3D(te,W,Xt,le,$t,ht,xt,ut,Re,xe,pe),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ae),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ye),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ve),D.pixelStorei(D.UNPACK_SKIP_ROWS,gn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ie),W===0&&k.generateMipmaps&&D.generateMipmap(te),zt.unbindTexture()},this.initRenderTarget=function(w){qt.get(w).__webglFramebuffer===void 0&&I.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?I.setTextureCube(w,0):w.isData3DTexture?I.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?I.setTexture2DArray(w,0):I.setTexture2D(w,0),zt.unbindTexture()},this.resetState=function(){B=0,R=0,P=null,zt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Cl?"display-p3":"srgb",e.unpackColorSpace=be.workingColorSpace===No?"display-p3":"srgb"}},Mc=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Gt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},bc=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},cr=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},gs=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=eo,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},hn=new L,an=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix4(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyNormalMatrix(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.transformDirection(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ho=class extends Ze{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ws,Ar=new L,Xs=new L,qs=new L,Ys=new vt,Tr=new vt,dm=new ne,aa=new L,Rr=new L,ca=new L,yd=new vt,xh=new vt,Md=new vt,Sc=class extends Se{constructor(t=new ho){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new he;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gs(e,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new an(n,3,0,!1)),Ws.setAttribute("uv",new an(n,2,3,!1))}this.geometry=Ws,this.material=t,this.center=new vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),dm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;la(aa.set(-.5,-.5,0),qs,o,Xs,i,r),la(Rr.set(.5,-.5,0),qs,o,Xs,i,r),la(ca.set(.5,.5,0),qs,o,Xs,i,r),yd.set(0,0),xh.set(1,0),Md.set(1,1);let a=t.ray.intersectTriangle(aa,Rr,ca,!1,Ar);if(a===null&&(la(Rr.set(-.5,.5,0),qs,o,Xs,i,r),xh.set(0,1),a=t.ray.intersectTriangle(aa,ca,Rr,!1,Ar),a===null))return;let c=t.ray.origin.distanceTo(Ar);c<t.near||c>t.far||e.push({distance:c,point:Ar.clone(),uv:Xn.getInterpolation(Ar,aa,Rr,ca,yd,xh,Md,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function la(s,t,e,n,i,r){Ys.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Tr.x=r*Ys.x-i*Ys.y,Tr.y=i*Ys.x+r*Ys.y):Tr.copy(Ys),s.copy(t),s.x+=Tr.x,s.y+=Tr.y,s.applyMatrix4(dm)}var ha=new L,bd=new L,wc=class extends Se{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);let e=t.levels;for(let n=0,i=e.length;n<i;n++){let r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);let i=this.levels,r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){let e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){let i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){let e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){ha.setFromMatrixPosition(this.matrixWorld);let i=t.ray.origin.distanceTo(ha);this.getObjectForDistance(i).raycast(t,e)}}update(t){let e=this.levels;if(e.length>1){ha.setFromMatrixPosition(t.matrixWorld),bd.setFromMatrixPosition(this.matrixWorld);let n=ha.distanceTo(bd)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let o=e[i].distance;if(e[i].object.visible&&(o-=o*e[i].hysteresis),n>=o)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){let e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let o=n[i];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}},Sd=new L,wd=new ve,Ed=new ve,Wy=new L,Ad=new ne,ua=new L,_h=new Oe,Td=new ne,vh=new Li,Ec=class extends ce{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Oh,this.bindMatrix=new ne,this.bindMatrixInverse=new ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ne),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ua),this.boundingBox.expandByPoint(ua)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Oe),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ua),this.boundingSphere.expandByPoint(ua)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_h.copy(this.boundingSphere),_h.applyMatrix4(i),t.ray.intersectsSphere(_h)!==!1&&(Td.copy(i).invert(),vh.copy(t.ray).applyMatrix4(Td),!(this.boundingBox!==null&&vh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,vh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ve,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Oh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===kp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;wd.fromBufferAttribute(i.attributes.skinIndex,t),Ed.fromBufferAttribute(i.attributes.skinWeight,t),Sd.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=Ed.getComponent(r);if(o!==0){let a=wd.getComponent(r);Ad.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Wy.copy(Sd).applyMatrix4(Ad),o)}}return e.applyMatrix4(this.bindMatrixInverse)}},uo=class extends Se{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ln=class extends He{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Ye,h=Ye,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rd=new ne,Xy=new ne,Ac=class s{constructor(t=[],e=[]){this.uuid=Sn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ne)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new ne;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:Xy;Rd.multiplyMatrices(a,e[r]),Rd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Ln(e,t,t,dn,_n);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new uo),this.bones.push(o),this.boneInverses.push(new ne().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},_i=class extends Me{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Zs=new ne,Cd=new ne,fa=[],Pd=new Ne,qy=new ne,Cr=new ce,Pr=new Oe,Tc=class extends ce{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _i(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,qy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ne),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),Pd.copy(t.boundingBox).applyMatrix4(Zs),this.boundingBox.union(Pd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oe),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),Pr.copy(t.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(Pr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Cr.geometry=this.geometry,Cr.material=this.material,Cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(n),t.ray.intersectsSphere(Pr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Zs),Cd.multiplyMatrices(n,Zs),Cr.matrixWorld=Cd,Cr.raycast(t,fa);for(let o=0,a=fa.length;o<a;o++){let c=fa[o];c.instanceId=r,c.object=this,e.push(c)}fa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _i(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ln(new Float32Array(i*this.count),i,this.count,El,_n));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};function Yy(s,t){return s.z-t.z}function Zy(s,t){return t.z-s.z}var nu=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n){let i=this.pool,r=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});let o=i[this.index];r.push(o),this.index++,o.start=t.start,o.count=t.count,o.z=e,o.index=n}reset(){this.list.length=0,this.index=0}},Ri=new ne,yh=new ne,Jy=new ne,$y=new Gt(1,1,1),Id=new ne,Mh=new ms,da=new Ne,Zi=new Oe,Ir=new L,Ld=new L,Ky=new L,bh=new nu,sn=new ce,pa=[];function jy(s,t,e=0){let n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,s.getComponent(r,o))}else t.array.set(s.array,e*n);t.needsUpdate=!0}var Rc=class extends ce{get maxInstanceCount(){return this._maxInstanceCount}constructor(t,e,n=e*2,i){super(new he,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._availableInstanceIds=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4),n=new Ln(e,t,t,dn,_n);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Uint32Array(t*t),n=new Ln(e,t,t,Do,gi);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Float32Array(t*t*4).fill(1),n=new Ln(e,t,t,dn,_n);n.colorSpace=be.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){let e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in t.attributes){let o=t.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,h=new a.constructor(n*c),u=new Me(h,c,l);e.setAttribute(r,u)}if(t.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new Me(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){let e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(let n in e.attributes){if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ne);let t=this.boundingBox,e=this._drawInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,Ri),this.getBoundingBoxAt(r,da).applyMatrix4(Ri),t.union(da)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oe);let t=this.boundingSphere,e=this._drawInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,Ri),this.getBoundingSphereAt(r,Zi).applyMatrix4(Ri),t.union(Zi)}}addInstance(t){if(this._drawInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:t},i=null;this._availableInstanceIds.length>0?(i=this._availableInstanceIds.pop(),this._drawInfo[i]=n):(i=this._drawInfo.length,this._drawInfo.push(n));let r=this._matricesTexture,o=r.image.data;Jy.toArray(o,i*16),r.needsUpdate=!0;let a=this._colorsTexture;return a&&($y.toArray(a.image.data,i*4),a.needsUpdate=!0),i}addGeometry(t,e=-1,n=-1){if(this._initializeGeometry(t),this._validateGeometry(t),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");let i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1},r=null,o=this._reservedRanges,a=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(r=o[o.length-1]),e===-1?i.vertexCount=t.getAttribute("position").count:i.vertexCount=e,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;let l=t.getIndex(),h=l!==null;if(h&&(n===-1?i.indexCount=l.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let u=this._geometryCount;return this._geometryCount++,o.push(i),a.push({start:h?i.indexStart:i.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new Ne,sphereInitialized:!1,sphere:new Oe}),this.setGeometryAt(u,t),u}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._reservedRanges[t];if(i&&o.count>a.indexCount||e.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");let c=a.vertexStart,l=a.vertexCount;for(let d in n.attributes){let p=e.getAttribute(d),_=n.getAttribute(d);jy(p,_,c);let g=p.itemSize;for(let m=p.count,y=l;m<y;m++){let v=c+m;for(let M=0;M<g;M++)_.setComponent(v,M,0)}_.needsUpdate=!0,_.addUpdateRange(c*g,l*g)}if(i){let d=a.indexStart;for(let p=0;p<o.count;p++)r.setX(d+p,c+o.getX(p));for(let p=o.count,_=a.indexCount;p<_;p++)r.setX(d+p,c);r.needsUpdate=!0,r.addUpdateRange(d,a.indexCount)}let h=this._bounds[t];e.boundingBox!==null?(h.box.copy(e.boundingBox),h.boxInitialized=!0):h.boxInitialized=!1,e.boundingSphere!==null?(h.sphere.copy(e.boundingSphere),h.sphereInitialized=!0):h.sphereInitialized=!1;let u=this._drawRanges[t],f=e.getAttribute("position");return u.count=i?o.count:f.count,this._visibilityChanged=!0,t}deleteInstance(t){let e=this._drawInfo;return t>=e.length||e[t].active===!1?this:(e[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this)}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;let n=this._bounds[t],i=n.box,r=this.geometry;if(n.boxInitialized===!1){i.makeEmpty();let o=r.index,a=r.attributes.position,c=this._drawRanges[t];for(let l=c.start,h=c.start+c.count;l<h;l++){let u=l;o&&(u=o.getX(u)),i.expandByPoint(Ir.fromBufferAttribute(a,u))}n.boxInitialized=!0}return e.copy(i),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;let n=this._bounds[t],i=n.sphere,r=this.geometry;if(n.sphereInitialized===!1){i.makeEmpty(),this.getBoundingBoxAt(t,da),da.getCenter(i.center);let o=r.index,a=r.attributes.position,c=this._drawRanges[t],l=0;for(let h=c.start,u=c.start+c.count;h<u;h++){let f=h;o&&(f=o.getX(f)),Ir.fromBufferAttribute(a,f),l=Math.max(l,i.center.distanceToSquared(Ir))}i.radius=Math.sqrt(l),n.sphereInitialized=!0}return e.copy(i),e}setMatrixAt(t,e){let n=this._drawInfo,i=this._matricesTexture,r=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?this:(e.toArray(r,t*16),i.needsUpdate=!0,this)}getMatrixAt(t,e){let n=this._drawInfo,i=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?null:e.fromArray(i,t*16)}setColorAt(t,e){this._colorsTexture===null&&this._initColorsTexture();let n=this._colorsTexture,i=this._colorsTexture.image.data,r=this._drawInfo;return t>=r.length||r[t].active===!1?this:(e.toArray(i,t*4),n.needsUpdate=!0,this)}getColorAt(t,e){let n=this._colorsTexture.image.data,i=this._drawInfo;return t>=i.length||i[t].active===!1?null:e.fromArray(n,t*4)}setVisibleAt(t,e){let n=this._drawInfo;return t>=n.length||n[t].active===!1||n[t].visible===e?this:(n[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){let e=this._drawInfo;return t>=e.length||e[t].active===!1?!1:e[t].visible}setGeometryIdAt(t,e){let n=this._drawInfo;return t>=n.length||n[t].active===!1||e<0||e>=this._geometryCount?null:(n[t].geometryIndex=e,this)}getGeometryIdAt(t){let e=this._drawInfo;return t>=e.length||e[t].active===!1?-1:e[t].geometryIndex}getGeometryRangeAt(t,e={}){if(t<0||t>=this._geometryCount)return null;let n=this._drawRanges[t];return e.start=n.start,e.count=n.count,e}raycast(t,e){let n=this._drawInfo,i=this._drawRanges,r=this.matrixWorld,o=this.geometry;sn.material=this.material,sn.geometry.index=o.index,sn.geometry.attributes=o.attributes,sn.geometry.boundingBox===null&&(sn.geometry.boundingBox=new Ne),sn.geometry.boundingSphere===null&&(sn.geometry.boundingSphere=new Oe);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;let l=n[a].geometryIndex,h=i[l];sn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,sn.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,sn.geometry.boundingBox),this.getBoundingSphereAt(l,sn.geometry.boundingSphere),sn.raycast(t,pa);for(let u=0,f=pa.length;u<f;u++){let d=pa[u];d.object=this,d.batchId=a,e.push(d)}pa.length=0}sn.material=null,sn.geometry.index=null,sn.geometry.attributes={},sn.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._drawRanges=t._drawRanges.map(e=>({...e})),this._reservedRanges=t._reservedRanges.map(e=>({...e})),this._drawInfo=t._drawInfo.map(e=>({...e})),this._bounds=t._bounds.map(e=>({boxInitialized:e.boxInitialized,box:e.box.clone(),sphereInitialized:e.sphereInitialized,sphere:e.sphere.clone()})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._drawInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._drawRanges,f=this.perObjectFrustumCulled,d=this._indirectTexture,p=d.image.data;f&&(Id.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Mh.setFromProjectionMatrix(Id,t.coordinateSystem));let _=0;if(this.sortObjects){yh.copy(this.matrixWorld).invert(),Ir.setFromMatrixPosition(n.matrixWorld).applyMatrix4(yh),Ld.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(yh);for(let y=0,v=c.length;y<v;y++)if(c[y].visible&&c[y].active){let M=c[y].geometryIndex;this.getMatrixAt(y,Ri),this.getBoundingSphereAt(M,Zi).applyMatrix4(Ri);let B=!1;if(f&&(B=!Mh.intersectsSphere(Zi)),!B){let R=Ky.subVectors(Zi.center,Ir).dot(Ld);bh.push(u[M],R,y)}}let g=bh.list,m=this.customSort;m===null?g.sort(r.transparent?Zy:Yy):m.call(this,g,n);for(let y=0,v=g.length;y<v;y++){let M=g[y];l[_]=M.start*a,h[_]=M.count,p[_]=M.index,_++}bh.reset()}else for(let g=0,m=c.length;g<m;g++)if(c[g].visible&&c[g].active){let y=c[g].geometryIndex,v=!1;if(f&&(this.getMatrixAt(g,Ri),this.getBoundingSphereAt(y,Zi).applyMatrix4(Ri),v=!Mh.intersectsSphere(Zi)),!v){let M=u[y];l[_]=M.start*a,h[_]=M.count,p[_]=g,_++}}d.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,o){this.onBeforeRender(t,null,i,r,o)}},Je=class extends Ze{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Cc=new L,Pc=new L,Ud=new ne,Lr=new Li,ma=new Oe,Sh=new L,Dd=new L,$n=class extends Se{constructor(t=new he,e=new Je){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Cc.fromBufferAttribute(e,i-1),Pc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Cc.distanceTo(Pc);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(i),ma.radius+=r,t.ray.intersectsSphere(ma)===!1)return;Ud.copy(i).invert(),Lr.copy(t.ray).applyMatrix4(Ud);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,g=p-1;_<g;_+=l){let m=h.getX(_),y=h.getX(_+1),v=ga(this,t,Lr,c,m,y);v&&e.push(v)}if(this.isLineLoop){let _=h.getX(p-1),g=h.getX(d),m=ga(this,t,Lr,c,_,g);m&&e.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,g=p-1;_<g;_+=l){let m=ga(this,t,Lr,c,_,_+1);m&&e.push(m)}if(this.isLineLoop){let _=ga(this,t,Lr,c,p-1,d);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ga(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(Cc.fromBufferAttribute(o,i),Pc.fromBufferAttribute(o,r),e.distanceSqToSegment(Cc,Pc,Sh,Dd)>n)return;Sh.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Sh);if(!(c<t.near||c>t.far))return{distance:c,point:Dd.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var Nd=new L,Od=new L,On=class extends $n{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Nd.fromBufferAttribute(e,i),Od.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Nd.distanceTo(Od);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ic=class extends $n{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},fo=class extends Ze{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Fd=new ne,iu=new Li,xa=new Oe,_a=new L,Lc=class extends Se{constructor(t=new he,e=new fo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(i),xa.radius+=r,t.ray.intersectsSphere(xa)===!1)return;Fd.copy(i).invert(),iu.copy(t.ray).applyMatrix4(Fd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=f,_=d;p<_;p++){let g=l.getX(p);_a.fromBufferAttribute(u,g),Bd(_a,g,c,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,_=d;p<_;p++)_a.fromBufferAttribute(u,p),Bd(_a,p,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bd(s,t,e,n,i,r,o){let a=iu.distanceSqToPoint(s);if(a<e){let c=new L;iu.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var su=class extends He{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:ke,this.magFilter=r!==void 0?r:ke,this.generateMipmaps=!1;let h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},ru=class extends He{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Ye,this.minFilter=Ye,this.generateMipmaps=!1,this.needsUpdate=!0}},lr=class extends He{constructor(t,e,n,i,r,o,a,c,l,h,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}},ou=class extends lr{constructor(t,e,n,i,r,o){super(t,e,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=In,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},au=class extends lr{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,mi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}},cu=class extends He{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new vt:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,i=[],r=[],o=[],a=new L,c=new ne;for(let d=0;d<=t;d++){let p=d/t;i[d]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(De(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(De(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},hr=class extends Tn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new vt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Uc=class extends hr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function _f(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var va=new L,wh=new _f,Eh=new _f,Ah=new _f,Dc=class extends Tn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(va.subVectors(i[0],i[1]).add(i[0]),l=va);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(va.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=va),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),wh.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,p,_,g),Eh.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,p,_,g),Ah.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(wh.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Eh.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Ah.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(wh.calc(c),Eh.calc(c),Ah.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function zd(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function Qy(s,t){let e=1-s;return e*e*t}function tM(s,t){return 2*(1-s)*s*t}function eM(s,t){return s*s*t}function Wr(s,t,e,n){return Qy(s,t)+tM(s,e)+eM(s,n)}function nM(s,t){let e=1-s;return e*e*e*t}function iM(s,t){let e=1-s;return 3*e*e*s*t}function sM(s,t){return 3*(1-s)*s*s*t}function rM(s,t){return s*s*s*t}function Xr(s,t,e,n,i){return nM(s,t)+iM(s,e)+sM(s,n)+rM(s,i)}var po=class extends Tn{constructor(t=new vt,e=new vt,n=new vt,i=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new vt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xr(t,i.x,r.x,o.x,a.x),Xr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Nc=class extends Tn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xr(t,i.x,r.x,o.x,a.x),Xr(t,i.y,r.y,o.y,a.y),Xr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},mo=class extends Tn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oc=class extends Tn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},go=class extends Tn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Wr(t,i.x,r.x,o.x),Wr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xo=class extends Tn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Wr(t,i.x,r.x,o.x),Wr(t,i.y,r.y,o.y),Wr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_o=class extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(zd(a,c.x,l.x,h.x,u.x),zd(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new vt().fromArray(i))}return this}},Fc=Object.freeze({__proto__:null,ArcCurve:Uc,CatmullRomCurve3:Dc,CubicBezierCurve:po,CubicBezierCurve3:Nc,EllipseCurve:hr,LineCurve:mo,LineCurve3:Oc,QuadraticBezierCurve:go,QuadraticBezierCurve3:xo,SplineCurve:_o}),Bc=class extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Fc[i.type]().fromJSON(i))}return this}},xs=class extends Bc{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new mo(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new go(this.currentPoint.clone(),new vt(t,e),new vt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new po(this.currentPoint.clone(),new vt(t,e),new vt(n,i),new vt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new _o(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let l=new hr(t,e,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},vo=class s extends he{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=De(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new L,f=new vt,d=new L,p=new L,_=new L,g=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-g,d.z=m*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(p)}for(let y=0;y<=e;y++){let v=n+y*h*i,M=Math.sin(v),B=Math.cos(v);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*M,u.y=t[R].y,u.z=t[R].x*B,o.push(u.x,u.y,u.z),f.x=y/e,f.y=R/(t.length-1),a.push(f.x,f.y);let P=c[3*R+0]*M,z=c[3*R+1],rt=c[3*R+0]*B;l.push(P,z,rt)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){let M=v+y*t.length,B=M,R=M+t.length,P=M+t.length+1,z=M+1;r.push(B,R,z),r.push(P,z,R)}this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("uv",new Yt(a,2)),this.setAttribute("normal",new Yt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},zc=class s extends vo{constructor(t=1,e=1,n=4,i=8){let r=new xs;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},kc=class s extends he{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new L,h=new vt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(a,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ui=class s extends he{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,_=[],g=n/2,m=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(d,2));function y(){let M=new L,B=new L,R=0,P=(e-t)/n;for(let z=0;z<=r;z++){let rt=[],b=z/r,T=b*(e-t)+t;for(let et=0;et<=i;et++){let nt=et/i,ot=nt*c+a,yt=Math.sin(ot),it=Math.cos(ot);B.x=T*yt,B.y=-b*n+g,B.z=T*it,u.push(B.x,B.y,B.z),M.set(yt,P,it).normalize(),f.push(M.x,M.y,M.z),d.push(nt,1-b),rt.push(p++)}_.push(rt)}for(let z=0;z<i;z++)for(let rt=0;rt<r;rt++){let b=_[rt][z],T=_[rt+1][z],et=_[rt+1][z+1],nt=_[rt][z+1];t>0&&(h.push(b,T,nt),R+=3),e>0&&(h.push(T,et,nt),R+=3)}l.addGroup(m,R,0),m+=R}function v(M){let B=p,R=new vt,P=new L,z=0,rt=M===!0?t:e,b=M===!0?1:-1;for(let et=1;et<=i;et++)u.push(0,g*b,0),f.push(0,b,0),d.push(.5,.5),p++;let T=p;for(let et=0;et<=i;et++){let ot=et/i*c+a,yt=Math.cos(ot),it=Math.sin(ot);P.x=rt*it,P.y=g*b,P.z=rt*yt,u.push(P.x,P.y,P.z),f.push(0,b,0),R.x=yt*.5+.5,R.y=it*.5*b+.5,d.push(R.x,R.y),p++}for(let et=0;et<i;et++){let nt=B+et,ot=T+et;M===!0?h.push(ot,ot+1,nt):h.push(ot+1,ot,nt),z+=3}l.addGroup(m,z,M===!0?1:2),m+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Hc=class s extends Ui{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Di=class s extends he{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new L,M=new L,B=new L;for(let R=0;R<e.length;R+=3)d(e[R+0],v),d(e[R+1],M),d(e[R+2],B),c(v,M,B,y)}function c(y,v,M,B){let R=B+1,P=[];for(let z=0;z<=R;z++){P[z]=[];let rt=y.clone().lerp(M,z/R),b=v.clone().lerp(M,z/R),T=R-z;for(let et=0;et<=T;et++)et===0&&z===R?P[z][et]=rt:P[z][et]=rt.clone().lerp(b,et/T)}for(let z=0;z<R;z++)for(let rt=0;rt<2*(R-z)-1;rt++){let b=Math.floor(rt/2);rt%2===0?(f(P[z][b+1]),f(P[z+1][b]),f(P[z][b])):(f(P[z][b+1]),f(P[z+1][b+1]),f(P[z+1][b]))}}function l(y){let v=new L;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(y),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){let y=new L;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let M=g(y)/2/Math.PI+.5,B=m(y)/Math.PI+.5;o.push(M,1-B)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){let v=o[y+0],M=o[y+2],B=o[y+4],R=Math.max(v,M,B),P=Math.min(v,M,B);R>.9&&P<.1&&(v<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),B<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,v){let M=y*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function p(){let y=new L,v=new L,M=new L,B=new L,R=new vt,P=new vt,z=new vt;for(let rt=0,b=0;rt<r.length;rt+=9,b+=6){y.set(r[rt+0],r[rt+1],r[rt+2]),v.set(r[rt+3],r[rt+4],r[rt+5]),M.set(r[rt+6],r[rt+7],r[rt+8]),R.set(o[b+0],o[b+1]),P.set(o[b+2],o[b+3]),z.set(o[b+4],o[b+5]),B.copy(y).add(v).add(M).divideScalar(3);let T=g(B);_(R,b+0,y,T),_(P,b+2,v,T),_(z,b+4,M,T)}}function _(y,v,M,B){B<0&&y.x===1&&(o[v]=y.x-1),M.x===0&&M.z===0&&(o[v]=B/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}},Vc=class s extends Di{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},ya=new L,Ma=new L,Th=new L,ba=new Xn,Gc=class extends he{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(cs*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);let{a:_,b:g,c:m}=ba;if(_.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),ba.getNormal(Th),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){let v=(y+1)%3,M=u[y],B=u[v],R=ba[h[y]],P=ba[h[v]],z=`${M}_${B}`,rt=`${B}_${M}`;rt in f&&f[rt]?(Th.dot(f[rt].normal)<=r&&(d.push(R.x,R.y,R.z),d.push(P.x,P.y,P.z)),f[rt]=null):z in f||(f[z]={index0:l[y],index1:l[v],normal:Th.clone()})}}for(let p in f)if(f[p]){let{index0:_,index1:g}=f[p];ya.fromBufferAttribute(a,_),Ma.fromBufferAttribute(a,g),d.push(ya.x,ya.y,ya.z),d.push(Ma.x,Ma.y,Ma.z)}this.setAttribute("position",new Yt(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},wn=class extends xs{constructor(t){super(t),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new xs().fromJSON(i))}return this}},oM={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=pm(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=uM(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let p=e;p<i;p+=e)u=s[p],f=s[p+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return yo(r,o,e,a,c,d,0),o}};function pm(s,t,e,n,i){let r,o;if(i===bM(s,t,e,n)>0)for(r=t;r<e;r+=n)o=kd(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=kd(r,s[r],s[r+1],o);return o&&Il(o,o.next)&&(bo(o),o=o.next),o}function _s(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Il(e,e.next)||Le(e.prev,e,e.next)===0)){if(bo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yo(s,t,e,n,i,r,o){if(!s)return;!o&&r&&gM(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?cM(s,n,i,r):aM(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),bo(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=lM(_s(s),t,e),yo(s,t,e,n,i,r,2)):o===2&&hM(s,t,e,n,i,r):yo(_s(s),t,e,n,i,r,1);break}}}function aM(s){let t=s.prev,e=s,n=s.next;if(Le(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&js(i,a,r,c,o,l,p.x,p.y)&&Le(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function cM(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Le(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,p=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,m=lu(d,p,t,e,n),y=lu(_,g,t,e,n),v=s.prevZ,M=s.nextZ;for(;v&&v.z>=m&&M&&M.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&js(a,h,c,u,l,f,v.x,v.y)&&Le(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=_&&M.y>=p&&M.y<=g&&M!==i&&M!==o&&js(a,h,c,u,l,f,M.x,M.y)&&Le(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&js(a,h,c,u,l,f,v.x,v.y)&&Le(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=y;){if(M.x>=d&&M.x<=_&&M.y>=p&&M.y<=g&&M!==i&&M!==o&&js(a,h,c,u,l,f,M.x,M.y)&&Le(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function lM(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!Il(i,r)&&mm(i,n,n.next,r)&&Mo(i,r)&&Mo(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),bo(n),bo(n.next),n=s=r),n=n.next}while(n!==s);return _s(n)}function hM(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vM(o,a)){let c=gm(o,a);o=_s(o,o.next),c=_s(c,c.next),yo(o,t,e,n,i,r,0),yo(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function uM(s,t,e,n){let i=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=pm(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(_M(l));for(i.sort(fM),r=0;r<i.length;r++)e=dM(i[r],e);return e}function fM(s,t){return s.x-t.x}function dM(s,t){let e=pM(s,t);if(!e)return t;let n=gm(e,s);return _s(n,n.next),_s(e,e.next)}function pM(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&js(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Mo(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&mM(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function mM(s,t){return Le(s.prev,s,t.prev)<0&&Le(t.next,s,s.next)<0}function gM(s,t,e,n){let i=s;do i.z===0&&(i.z=lu(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,xM(i)}function xM(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function lu(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function _M(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function js(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function vM(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!yM(s,t)&&(Mo(s,t)&&Mo(t,s)&&MM(s,t)&&(Le(s.prev,s,t.prev)||Le(s,t.prev,t))||Il(s,t)&&Le(s.prev,s,s.next)>0&&Le(t.prev,t,t.next)>0)}function Le(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Il(s,t){return s.x===t.x&&s.y===t.y}function mm(s,t,e,n){let i=wa(Le(s,t,e)),r=wa(Le(s,t,n)),o=wa(Le(e,n,s)),a=wa(Le(e,n,t));return!!(i!==r&&o!==a||i===0&&Sa(s,e,t)||r===0&&Sa(s,n,t)||o===0&&Sa(e,s,n)||a===0&&Sa(e,t,n))}function Sa(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function wa(s){return s>0?1:s<0?-1:0}function yM(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&mm(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Mo(s,t){return Le(s.prev,s,s.next)<0?Le(s,t,s.next)>=0&&Le(s,s.prev,t)>=0:Le(s,t,s.prev)<0||Le(s,s.next,t)<0}function MM(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function gm(s,t){let e=new hu(s.i,s.x,s.y),n=new hu(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function kd(s,t,e,n){let i=new hu(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function bo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function hu(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function bM(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Un=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Hd(t),Vd(n,t);let o=t.length;e.forEach(Hd);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Vd(n,e[c]);let a=oM.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Hd(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Vd(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Wc=class s extends he{constructor(t=new wn([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Yt(i,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:SM,v,M=!1,B,R,P,z;m&&(v=m.getSpacedPoints(h),M=!0,f=!1,B=m.computeFrenetFrames(h,!1),R=new L,P=new L,z=new L),f||(g=0,d=0,p=0,_=0);let rt=a.extractPoints(l),b=rt.shape,T=rt.holes;if(!Un.isClockWise(b)){b=b.reverse();for(let ft=0,D=T.length;ft<D;ft++){let Dt=T[ft];Un.isClockWise(Dt)&&(T[ft]=Dt.reverse())}}let nt=Un.triangulateShape(b,T),ot=b;for(let ft=0,D=T.length;ft<D;ft++){let Dt=T[ft];b=b.concat(Dt)}function yt(ft,D,Dt){return D||console.error("THREE.ExtrudeGeometry: vec does not exist"),ft.clone().addScaledVector(D,Dt)}let it=b.length,wt=nt.length;function ct(ft,D,Dt){let Ot,Tt,zt,Qt=ft.x-D.x,qt=ft.y-D.y,I=Dt.x-ft.x,A=Dt.y-ft.y,K=Qt*Qt+qt*qt,_t=Qt*A-qt*I;if(Math.abs(_t)>Number.EPSILON){let Mt=Math.sqrt(K),gt=Math.sqrt(I*I+A*A),Kt=D.x-qt/Mt,Ft=D.y+Qt/Mt,V=Dt.x-A/gt,dt=Dt.y+I/gt,G=((V-Kt)*A-(dt-Ft)*I)/(Qt*A-qt*I);Ot=Kt+Qt*G-ft.x,Tt=Ft+qt*G-ft.y;let j=Ot*Ot+Tt*Tt;if(j<=2)return new vt(Ot,Tt);zt=Math.sqrt(j/2)}else{let Mt=!1;Qt>Number.EPSILON?I>Number.EPSILON&&(Mt=!0):Qt<-Number.EPSILON?I<-Number.EPSILON&&(Mt=!0):Math.sign(qt)===Math.sign(A)&&(Mt=!0),Mt?(Ot=-qt,Tt=Qt,zt=Math.sqrt(K)):(Ot=Qt,Tt=qt,zt=Math.sqrt(K/2))}return new vt(Ot/zt,Tt/zt)}let Ut=[];for(let ft=0,D=ot.length,Dt=D-1,Ot=ft+1;ft<D;ft++,Dt++,Ot++)Dt===D&&(Dt=0),Ot===D&&(Ot=0),Ut[ft]=ct(ot[ft],ot[Dt],ot[Ot]);let Bt=[],Vt,se=Ut.concat();for(let ft=0,D=T.length;ft<D;ft++){let Dt=T[ft];Vt=[];for(let Ot=0,Tt=Dt.length,zt=Tt-1,Qt=Ot+1;Ot<Tt;Ot++,zt++,Qt++)zt===Tt&&(zt=0),Qt===Tt&&(Qt=0),Vt[Ot]=ct(Dt[Ot],Dt[zt],Dt[Qt]);Bt.push(Vt),se=se.concat(Vt)}for(let ft=0;ft<g;ft++){let D=ft/g,Dt=d*Math.cos(D*Math.PI/2),Ot=p*Math.sin(D*Math.PI/2)+_;for(let Tt=0,zt=ot.length;Tt<zt;Tt++){let Qt=yt(ot[Tt],Ut[Tt],Ot);Ct(Qt.x,Qt.y,-Dt)}for(let Tt=0,zt=T.length;Tt<zt;Tt++){let Qt=T[Tt];Vt=Bt[Tt];for(let qt=0,I=Qt.length;qt<I;qt++){let A=yt(Qt[qt],Vt[qt],Ot);Ct(A.x,A.y,-Dt)}}}let fe=p+_;for(let ft=0;ft<it;ft++){let D=f?yt(b[ft],se[ft],fe):b[ft];M?(P.copy(B.normals[0]).multiplyScalar(D.x),R.copy(B.binormals[0]).multiplyScalar(D.y),z.copy(v[0]).add(P).add(R),Ct(z.x,z.y,z.z)):Ct(D.x,D.y,0)}for(let ft=1;ft<=h;ft++)for(let D=0;D<it;D++){let Dt=f?yt(b[D],se[D],fe):b[D];M?(P.copy(B.normals[ft]).multiplyScalar(Dt.x),R.copy(B.binormals[ft]).multiplyScalar(Dt.y),z.copy(v[ft]).add(P).add(R),Ct(z.x,z.y,z.z)):Ct(Dt.x,Dt.y,u/h*ft)}for(let ft=g-1;ft>=0;ft--){let D=ft/g,Dt=d*Math.cos(D*Math.PI/2),Ot=p*Math.sin(D*Math.PI/2)+_;for(let Tt=0,zt=ot.length;Tt<zt;Tt++){let Qt=yt(ot[Tt],Ut[Tt],Ot);Ct(Qt.x,Qt.y,u+Dt)}for(let Tt=0,zt=T.length;Tt<zt;Tt++){let Qt=T[Tt];Vt=Bt[Tt];for(let qt=0,I=Qt.length;qt<I;qt++){let A=yt(Qt[qt],Vt[qt],Ot);M?Ct(A.x,A.y+v[h-1].y,v[h-1].x+Dt):Ct(A.x,A.y,u+Dt)}}}pt(),Et();function pt(){let ft=i.length/3;if(f){let D=0,Dt=it*D;for(let Ot=0;Ot<wt;Ot++){let Tt=nt[Ot];re(Tt[2]+Dt,Tt[1]+Dt,Tt[0]+Dt)}D=h+g*2,Dt=it*D;for(let Ot=0;Ot<wt;Ot++){let Tt=nt[Ot];re(Tt[0]+Dt,Tt[1]+Dt,Tt[2]+Dt)}}else{for(let D=0;D<wt;D++){let Dt=nt[D];re(Dt[2],Dt[1],Dt[0])}for(let D=0;D<wt;D++){let Dt=nt[D];re(Dt[0]+it*h,Dt[1]+it*h,Dt[2]+it*h)}}n.addGroup(ft,i.length/3-ft,0)}function Et(){let ft=i.length/3,D=0;Jt(ot,D),D+=ot.length;for(let Dt=0,Ot=T.length;Dt<Ot;Dt++){let Tt=T[Dt];Jt(Tt,D),D+=Tt.length}n.addGroup(ft,i.length/3-ft,1)}function Jt(ft,D){let Dt=ft.length;for(;--Dt>=0;){let Ot=Dt,Tt=Dt-1;Tt<0&&(Tt=ft.length-1);for(let zt=0,Qt=h+g*2;zt<Qt;zt++){let qt=it*zt,I=it*(zt+1),A=D+Ot+qt,K=D+Tt+qt,_t=D+Tt+I,Mt=D+Ot+I;ee(A,K,_t,Mt)}}}function Ct(ft,D,Dt){c.push(ft),c.push(D),c.push(Dt)}function re(ft,D,Dt){oe(ft),oe(D),oe(Dt);let Ot=i.length/3,Tt=y.generateTopUV(n,i,Ot-3,Ot-2,Ot-1);Lt(Tt[0]),Lt(Tt[1]),Lt(Tt[2])}function ee(ft,D,Dt,Ot){oe(ft),oe(D),oe(Ot),oe(D),oe(Dt),oe(Ot);let Tt=i.length/3,zt=y.generateSideWallUV(n,i,Tt-6,Tt-3,Tt-2,Tt-1);Lt(zt[0]),Lt(zt[1]),Lt(zt[3]),Lt(zt[1]),Lt(zt[2]),Lt(zt[3])}function oe(ft){i.push(c[ft*3+0]),i.push(c[ft*3+1]),i.push(c[ft*3+2])}function Lt(ft){r.push(ft.x),r.push(ft.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return wM(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Fc[i.type]().fromJSON(i)),new s(n,t.options)}},SM={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new vt(r,o),new vt(a,c),new vt(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],p=t[i*3+2],_=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new vt(o,1-c),new vt(l,1-u),new vt(f,1-p),new vt(_,1-m)]:[new vt(a,1-c),new vt(h,1-u),new vt(d,1-p),new vt(g,1-m)]}};function wM(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ur=class s extends Di{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},So=class s extends Di{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Xc=class s extends he{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/i,d=new L,p=new vt;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){let m=r+g/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let _=0;_<i;_++){let g=_*(n+1);for(let m=0;m<n;m++){let y=m+g,v=y,M=y+n+1,B=y+n+2,R=y+1;a.push(v,M,R),a.push(M,B,R)}}this.setIndex(a),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ni=class s extends he{constructor(t=new wn([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Yt(i,3)),this.setAttribute("normal",new Yt(r,3)),this.setAttribute("uv",new Yt(o,2));function l(h){let u=i.length/3,f=h.extractPoints(e),d=f.shape,p=f.holes;Un.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){let y=p[g];Un.isClockWise(y)===!0&&(p[g]=y.reverse())}let _=Un.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){let y=p[g];d=d.concat(y)}for(let g=0,m=d.length;g<m;g++){let y=d[g];i.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,m=_.length;g<m;g++){let y=_[g],v=y[0]+u,M=y[1]+u,B=y[2]+u;n.push(v,M,B),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return EM(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let o=e[t.shapes[i]];n.push(o)}return new s(n,t.curveSegments)}};function EM(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var wo=class s extends he{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,f=new L,d=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){let y=[],v=m/n,M=0;m===0&&o===0?M=.5/e:m===n&&c===Math.PI&&(M=-.5/e);for(let B=0;B<=e;B++){let R=B/e;u.x=-t*Math.cos(i+R*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+R*r)*Math.sin(o+v*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(R+M,1-v),y.push(l++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){let v=h[m][y+1],M=h[m][y],B=h[m+1][y],R=h[m+1][y+1];(m!==0||o>0)&&d.push(v,M,R),(m!==n-1||c<Math.PI)&&d.push(M,B,R)}this.setIndex(d),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},qc=class s extends Di{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Yc=class s extends he{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new L,u=new L,f=new L;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){let _=p/i*r,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(p/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){let _=(i+1)*d+p-1,g=(i+1)*(d-1)+p-1,m=(i+1)*(d-1)+p,y=(i+1)*d+p;o.push(_,g,y),o.push(g,m,y)}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Zc=class s extends he{constructor(t=1,e=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],c=[],l=[],h=[],u=new L,f=new L,d=new L,p=new L,_=new L,g=new L,m=new L;for(let v=0;v<=n;++v){let M=v/n*r*Math.PI*2;y(M,r,o,t,d),y(M+.01,r,o,t,p),g.subVectors(p,d),m.addVectors(p,d),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let B=0;B<=i;++B){let R=B/i*Math.PI*2,P=-e*Math.cos(R),z=e*Math.sin(R);u.x=d.x+(P*m.x+z*_.x),u.y=d.y+(P*m.y+z*_.y),u.z=d.z+(P*m.z+z*_.z),c.push(u.x,u.y,u.z),f.subVectors(u,d).normalize(),l.push(f.x,f.y,f.z),h.push(v/n),h.push(B/i)}}for(let v=1;v<=n;v++)for(let M=1;M<=i;M++){let B=(i+1)*(v-1)+(M-1),R=(i+1)*v+(M-1),P=(i+1)*v+M,z=(i+1)*(v-1)+M;a.push(B,R,z),a.push(R,P,z)}this.setIndex(a),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(h,2));function y(v,M,B,R,P){let z=Math.cos(v),rt=Math.sin(v),b=B/M*v,T=Math.cos(b);P.x=R*(2+T)*.5*z,P.y=R*(2+T)*rt*.5,P.z=R*Math.sin(b)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Jc=class s extends he{constructor(t=new xo(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new vt,h=new L,u=[],f=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(d,2));function _(){for(let v=0;v<e;v++)g(v);g(r===!1?e:0),y(),m()}function g(v){h=t.getPointAt(v/e,h);let M=o.normals[v],B=o.binormals[v];for(let R=0;R<=i;R++){let P=R/i*Math.PI*2,z=Math.sin(P),rt=-Math.cos(P);c.x=rt*M.x+z*B.x,c.y=rt*M.y+z*B.y,c.z=rt*M.z+z*B.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=e;v++)for(let M=1;M<=i;M++){let B=(i+1)*(v-1)+(M-1),R=(i+1)*v+(M-1),P=(i+1)*v+M,z=(i+1)*(v-1)+M;p.push(B,R,z),p.push(R,P,z)}}function y(){for(let v=0;v<=e;v++)for(let M=0;M<=i;M++)l.x=v/e,l.y=M/i,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Fc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},fr=class extends he{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new L,r=new L;if(t.index!==null){let o=t.attributes.position,a=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],f=u.start,d=u.count;for(let p=f,_=f+d;p<_;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),y=a.getX(p+(g+1)%3);i.fromBufferAttribute(o,m),r.fromBufferAttribute(o,y),Gd(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let h=3*a+l,u=3*a+(l+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),Gd(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Yt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Gd(s,t,e){let n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var Wd=Object.freeze({__proto__:null,BoxGeometry:xi,CapsuleGeometry:zc,CircleGeometry:kc,ConeGeometry:Hc,CylinderGeometry:Ui,DodecahedronGeometry:Vc,EdgesGeometry:Gc,ExtrudeGeometry:Wc,IcosahedronGeometry:ur,LatheGeometry:vo,OctahedronGeometry:So,PlaneGeometry:Jn,PolyhedronGeometry:Di,RingGeometry:Xc,ShapeGeometry:Ni,SphereGeometry:wo,TetrahedronGeometry:qc,TorusGeometry:Yc,TorusKnotGeometry:Zc,TubeGeometry:Jc,WireframeGeometry:fr}),$c=class extends Ze{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Gt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}},Kc=class extends mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Eo=class extends Ze{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},jc=class extends Eo{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return De(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},Qc=class extends Ze{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Gt(16777215),this.specular=new Gt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},tl=class extends Ze{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Gt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},el=class extends Ze{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},Oi=class extends Ze{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},nl=class extends Ze{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Gt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bi,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}},il=class extends Je{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function rs(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function xm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function _m(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function uu(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let c=0;c!==t;++c)i[o++]=s[a+c]}return i}function vf(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}function AM(s,t,e,n,i=30){let r=s.clone();r.name=t;let o=[];for(let c=0;c<r.tracks.length;++c){let l=r.tracks[c],h=l.getValueSize(),u=[],f=[];for(let d=0;d<l.times.length;++d){let p=l.times[d]*i;if(!(p<e||p>=n)){u.push(l.times[d]);for(let _=0;_<h;++_)f.push(l.values[d*h+_])}}u.length!==0&&(l.times=rs(u,l.times.constructor),l.values=rs(f,l.values.constructor),o.push(l))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r}function TM(s,t=0,e=s,n=30){n<=0&&(n=30);let i=e.tracks.length,r=t/n;for(let o=0;o<i;++o){let a=e.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;let l=s.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===c});if(l===void 0)continue;let h=0,u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let f=0,d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);let p=a.times.length-1,_;if(r<=a.times[0]){let m=h,y=u-h;_=a.values.slice(m,y)}else if(r>=a.times[p]){let m=p*u+h,y=m+u-h;_=a.values.slice(m,y)}else{let m=a.createInterpolant(),y=h,v=u-h;m.evaluate(r),_=m.resultBuffer.slice(y,v)}c==="quaternion"&&new on().fromArray(_).normalize().conjugate().toArray(_);let g=l.times.length;for(let m=0;m<g;++m){let y=m*d+f;if(c==="quaternion")on.multiplyQuaternionsFlat(l.values,y,_,0,l.values,y);else{let v=d-f*2;for(let M=0;M<v;++M)l.values[y+M]-=_[M]}}}return s.blendMode=pf,s}var RM={convertArray:rs,isTypedArray:xm,getKeyframeOrder:_m,sortedArray:uu,flattenJSON:vf,subclip:AM,makeClipAdditive:TM},vs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sl=class extends vs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:is,endingEnd:is}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ss:r=t,a=2*e-n;break;case Kr:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ss:o=t,c=2*n-e;break;case Kr:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),_=p*p,g=_*p,m=-f*g+2*f*_-f*p,y=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*p+1,v=(-1-d)*g+(1.5+d)*_+.5*p,M=d*g-d*_;for(let B=0;B!==a;++B)r[B]=m*o[h+B]+y*o[l+B]+v*o[c+B]+M*o[u+B];return r}},Ao=class extends vs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},rl=class extends vs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Rn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rs(e,this.TimeBufferType),this.values=rs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:rs(t.times,Array),values:rs(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case $r:e=this.InterpolantFactoryMethodDiscrete;break;case mc:e=this.InterpolantFactoryMethodLinear;break;case La:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return mc;case this.InterpolantFactoryMethodSmooth:return La}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&xm(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===La,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let _=e[u+p];if(_!==e[f+p]||_!==e[d+p]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=mc;var vi=class extends Rn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=$r;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends Rn{};To.prototype.ValueTypeName="color";var ys=class extends Rn{};ys.prototype.ValueTypeName="number";var ol=class extends vs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)on.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ms=class extends Rn{InterpolantFactoryMethodLinear(t){return new ol(this.times,this.values,this.getValueSize(),t)}};Ms.prototype.ValueTypeName="quaternion";Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends Rn{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=$r;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends Rn{};bs.prototype.ValueTypeName="vector";var Ss=class{constructor(t="",e=-1,n=[],i=Rl){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Sn(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(PM(n[o]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Rn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=_m(c);c=uu(c,1,h),l=uu(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ys(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){let l=t[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,p,_){if(d.length!==0){let g=[],m=[];vf(d,g,m,p),g.length!==0&&_.push(new u(f,g,m))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode,c=t.length||-1,l=t.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let _=0;_<f[p].morphTargets.length;_++)d[f[p].morphTargets[_]]=-1;for(let _ in d){let g=[],m=[];for(let y=0;y!==f[p].morphTargets.length;++y){let v=f[p];g.push(v.time),m.push(v.morphTarget===_?1:0)}i.push(new ys(".morphTargetInfluence["+_+"]",g,m))}c=d.length*o}else{let d=".bones["+e[u].name+"]";n(bs,d+".position",f,"pos",i),n(Ms,d+".quaternion",f,"rot",i),n(bs,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function CM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ys;case"vector":case"vector2":case"vector3":case"vector4":return bs;case"color":return To;case"quaternion":return Ms;case"bool":case"boolean":return vi;case"string":return yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function PM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=CM(s.type);if(s.times===void 0){let e=[],n=[];vf(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}var ui={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Ro=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},vm=new Ro,cn=class{constructor(t){this.manager=t!==void 0?t:vm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};cn.DEFAULT_MATERIAL_NAME="__DEFAULT";var ai={},fu=class extends Error{constructor(t,e){super(t),this.response=e}},Hn=class extends cn{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=ui.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ai[t]!==void 0){ai[t].push({onLoad:e,onProgress:n,onError:i});return}ai[t]=[],ai[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ai[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,_=0,g=new ReadableStream({start(m){y();function y(){u.read().then(({done:v,value:M})=>{if(v)m.close();else{_+=M.byteLength;let B=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let R=0,P=h.length;R<P;R++){let z=h[R];z.onProgress&&z.onProgress(B)}m.enqueue(M),y()}},v=>{m.error(v)})}}});return new Response(g)}else throw new fu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{ui.add(t,l);let h=ai[t];delete ai[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=ai[t];if(h===void 0)throw this.manager.itemError(t),l;delete ai[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}},du=class extends cn{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new Hn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){let e=[];for(let n=0;n<t.length;n++){let i=Ss.parse(t[n]);e.push(i)}return e}},pu=class extends cn{constructor(t){super(t)}load(t,e,n,i){let r=this,o=[],a=new lr,c=new Hn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(r.withCredentials);let l=0;function h(u){c.load(t[u],function(f){let d=r.parse(f,!0);o[u]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6&&(d.mipmapCount===1&&(a.minFilter=ke),a.image=o,a.format=d.format,a.needsUpdate=!0,e&&e(a))},n,i)}if(Array.isArray(t))for(let u=0,f=t.length;u<f;++u)h(u);else c.load(t,function(u){let f=r.parse(u,!0);if(f.isCubemap){let d=f.mipmaps.length/f.mipmapCount;for(let p=0;p<d;p++){o[p]={mipmaps:[]};for(let _=0;_<f.mipmapCount;_++)o[p].mipmaps.push(f.mipmaps[p*f.mipmapCount+_]),o[p].format=f.format,o[p].width=f.width,o[p].height=f.height}a.image=o}else a.image.width=f.width,a.image.height=f.height,a.mipmaps=f.mipmaps;f.mipmapCount===1&&(a.minFilter=ke),a.format=f.format,a.needsUpdate=!0,e&&e(a)},n,i);return a}},ws=class extends cn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=ui.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=io("img");function c(){h(),ui.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}},mu=class extends cn{constructor(t){super(t)}load(t,e,n,i){let r=new ps;r.colorSpace=Pn;let o=new ws(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(t[l],function(h){r.images[l]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let l=0;l<t.length;++l)c(l);return r}},gu=class extends cn{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new Ln,a=new Hn(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(c){let l;try{l=r.parse(c)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:In,o.wrapT=l.wrapT!==void 0?l.wrapT:In,o.magFilter=l.magFilter!==void 0?l.magFilter:ke,o.minFilter=l.minFilter!==void 0?l.minFilter:ke,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=qn),l.mipmapCount===1&&(o.minFilter=ke),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,e&&e(o,l)},n,i),o}},xu=class extends cn{constructor(t){super(t)}load(t,e,n,i){let r=new He,o=new ws(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},Kn=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},dr=class extends Kn{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Rh=new ne,Xd=new L,qd=new L,Co=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Xd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xd),qd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qd),e.updateMatrixWorld(),Rh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},_u=class extends Co{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=nr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},al=class extends Kn{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new _u}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Yd=new ne,Ur=new L,Ch=new L,vu=class extends Co{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ur),Ch.copy(n.position),Ch.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ch),n.updateMatrixWorld(),i.makeTranslation(-Ur.x,-Ur.y,-Ur.z),Yd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yd)}},cl=class extends Kn{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},yu=class extends Co{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pr=class extends Kn{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new yu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ll=class extends Kn{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},hl=class extends Kn{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){let e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}},ul=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new L)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){let n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){let n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){let n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}},fl=class extends Kn{constructor(t=new ul,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){let e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}},dl=class s extends cn{constructor(t){super(t),this.textures={}}load(t,e,n,i){let r=this,o=new Hn(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){let e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}let i=this.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(i.dispersion=t.dispersion),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(i.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(i.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(i.depthFunc=t.depthFunc),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(i.blendSrc=t.blendSrc),t.blendDst!==void 0&&(i.blendDst=t.blendDst),t.blendEquation!==void 0&&(i.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(i.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(i.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==void 0&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(i.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(let r in t.uniforms){let o=t.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new Gt().setHex(o.value);break;case"v2":i.uniforms[r].value=new vt().fromArray(o.value);break;case"v3":i.uniforms[r].value=new L().fromArray(o.value);break;case"v4":i.uniforms[r].value=new ve().fromArray(o.value);break;case"m3":i.uniforms[r].value=new me().fromArray(o.value);break;case"m4":i.uniforms[r].value=new ne().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(i.glslVersion=t.glslVersion),t.extensions!==void 0)for(let r in t.extensions)i.extensions[r]=t.extensions[r];if(t.lights!==void 0&&(i.lights=t.lights),t.clipping!==void 0&&(i.clipping=t.clipping),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new vt().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapRotation!==void 0&&i.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(i.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return s.createMaterialFromType(t)}static createMaterialFromType(t){let e={ShadowMaterial:$c,SpriteMaterial:ho,RawShaderMaterial:Kc,ShaderMaterial:mn,PointsMaterial:fo,MeshPhysicalMaterial:jc,MeshStandardMaterial:Eo,MeshPhongMaterial:Qc,MeshToonMaterial:tl,MeshNormalMaterial:el,MeshLambertMaterial:Oi,MeshDepthMaterial:ao,MeshDistanceMaterial:co,MeshBasicMaterial:Nn,MeshMatcapMaterial:nl,LineDashedMaterial:il,LineBasicMaterial:Je,Material:Ze};return new e[t]}},Po=class{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},mr=class extends he{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}},pl=class extends cn{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new Hn(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){let e={},n={};function i(d,p){if(e[p]!==void 0)return e[p];let g=d.interleavedBuffers[p],m=r(d,g.buffer),y=$s(g.type,m),v=new gs(y,g.stride);return v.uuid=g.uuid,e[p]=v,v}function r(d,p){if(n[p]!==void 0)return n[p];let g=d.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}let o=t.isInstancedBufferGeometry?new mr:new he,a=t.data.index;if(a!==void 0){let d=$s(a.type,a.array);o.setIndex(new Me(d,1))}let c=t.data.attributes;for(let d in c){let p=c[d],_;if(p.isInterleavedBufferAttribute){let g=i(t.data,p.data);_=new an(g,p.itemSize,p.offset,p.normalized)}else{let g=$s(p.type,p.array),m=p.isInstancedBufferAttribute?_i:Me;_=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),o.setAttribute(d,_)}let l=t.data.morphAttributes;if(l)for(let d in l){let p=l[d],_=[];for(let g=0,m=p.length;g<m;g++){let y=p[g],v;if(y.isInterleavedBufferAttribute){let M=i(t.data,y.data);v=new an(M,y.itemSize,y.offset,y.normalized)}else{let M=$s(y.type,y.array);v=new Me(M,y.itemSize,y.normalized)}y.name!==void 0&&(v.name=y.name),_.push(v)}o.morphAttributes[d]=_}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let u=t.data.groups||t.data.drawcalls||t.data.offsets;if(u!==void 0)for(let d=0,p=u.length;d!==p;++d){let _=u[d];o.addGroup(_.start,_.count,_.materialIndex)}let f=t.data.boundingSphere;if(f!==void 0){let d=new L;f.center!==void 0&&d.fromArray(f.center),o.boundingSphere=new Oe(d,f.radius)}return t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}},Mu=class extends cn{constructor(t){super(t)}load(t,e,n,i){let r=this,o=this.path===""?Po.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;let a=new Hn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(c){let l=null;try{l=JSON.parse(c)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+t+".",u.message);return}let h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),console.error("THREE.ObjectLoader: Can't load "+t);return}r.parse(l,e)},n,i)}async loadAsync(t,e){let n=this,i=this.path===""?Po.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;let r=new Hn(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let o=await r.loadAsync(t,e),a=JSON.parse(o),c=a.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(a)}parse(t,e){let n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),o=this.parseImages(t.images,function(){e!==void 0&&e(l)}),a=this.parseTextures(t.textures,o),c=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,r,c,a,n),h=this.parseSkeletons(t.skeletons,l);if(this.bindSkeletons(l,h),this.bindLightTargets(l),e!==void 0){let u=!1;for(let f in o)if(o[f].data instanceof HTMLImageElement){u=!0;break}u===!1&&e(l)}return l}async parseAsync(t){let e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),o=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,i,a,o,e),l=this.parseSkeletons(t.skeletons,c);return this.bindSkeletons(c,l),this.bindLightTargets(c),c}parseShapes(t){let e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){let r=new wn().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){let n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,o=t.length;r<o;r++){let a=new Ac().fromJSON(t[r],i);n[a.uuid]=a}return n}parseGeometries(t,e){let n={};if(t!==void 0){let i=new pl;for(let r=0,o=t.length;r<o;r++){let a,c=t[r];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(c);break;default:c.type in Wd?a=Wd[c.type].fromJSON(c,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n}parseMaterials(t,e){let n={},i={};if(t!==void 0){let r=new dl;r.setTextures(e);for(let o=0,a=t.length;o<a;o++){let c=t[o];n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(t){let e={};if(t!==void 0)for(let n=0;n<t.length;n++){let i=t[n],r=Ss.parse(i);e[r.uuid]=r}return e}parseImages(t,e){let n=this,i={},r;function o(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){let l=c,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return o(h)}else return c.data?{data:$s(c.type,c.data),width:c.width,height:c.height}:null}if(t!==void 0&&t.length>0){let c=new Ro(e);r=new ws(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,h=t.length;l<h;l++){let u=t[l],f=u.url;if(Array.isArray(f)){let d=[];for(let p=0,_=f.length;p<_;p++){let g=f[p],m=a(g);m!==null&&(m instanceof HTMLImageElement?d.push(m):d.push(new Ln(m.data,m.width,m.height)))}i[u.uuid]=new hi(d)}else{let d=a(u.url);i[u.uuid]=new hi(d)}}}return i}async parseImagesAsync(t){let e=this,n={},i;async function r(o){if(typeof o=="string"){let a=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(c)}else return o.data?{data:$s(o.type,o.data),width:o.width,height:o.height}:null}if(t!==void 0&&t.length>0){i=new ws(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=t.length;o<a;o++){let c=t[o],l=c.url;if(Array.isArray(l)){let h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u],p=await r(d);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new Ln(p.data,p.width,p.height)))}n[c.uuid]=new hi(h)}else{let h=await r(c.url);n[c.uuid]=new hi(h)}}}return n}parseTextures(t,e){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}let i={};if(t!==void 0)for(let r=0,o=t.length;r<o;r++){let a=t[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let c=e[a.image],l=c.data,h;Array.isArray(l)?(h=new ps,l.length===6&&(h.needsUpdate=!0)):(l&&l.data?h=new Ln:h=new He,l&&(h.needsUpdate=!0)),h.source=c,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,IM)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],Zd),h.wrapT=n(a.wrap[1],Zd)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,Jd)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,Jd)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(t,e,n,i,r){let o;function a(f){return e[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),e[f]}function c(f){if(f!==void 0){if(Array.isArray(f)){let d=[];for(let p=0,_=f.length;p<_;p++){let g=f[p];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),d.push(n[g])}return d}return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),n[f]}}function l(f){return i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),i[f]}let h,u;switch(t.type){case"Scene":o=new cr,t.background!==void 0&&(Number.isInteger(t.background)?o.background=new Gt(t.background):o.background=l(t.background)),t.environment!==void 0&&(o.environment=l(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?o.fog=new bc(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(o.fog=new Mc(t.fog.color,t.fog.density)),t.fog.name!==""&&(o.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(o.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(o.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&o.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":o=new Be(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(o.focus=t.focus),t.zoom!==void 0&&(o.zoom=t.zoom),t.filmGauge!==void 0&&(o.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(o.filmOffset=t.filmOffset),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"OrthographicCamera":o=new ar(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(o.zoom=t.zoom),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"AmbientLight":o=new ll(t.color,t.intensity);break;case"DirectionalLight":o=new pr(t.color,t.intensity),o.target=t.target||"";break;case"PointLight":o=new cl(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":o=new hl(t.color,t.intensity,t.width,t.height);break;case"SpotLight":o=new al(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),o.target=t.target||"";break;case"HemisphereLight":o=new dr(t.color,t.groundColor,t.intensity);break;case"LightProbe":o=new fl().fromJSON(t);break;case"SkinnedMesh":h=a(t.geometry),u=c(t.material),o=new Ec(h,u),t.bindMode!==void 0&&(o.bindMode=t.bindMode),t.bindMatrix!==void 0&&o.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(o.skeleton=t.skeleton);break;case"Mesh":h=a(t.geometry),u=c(t.material),o=new ce(h,u);break;case"InstancedMesh":h=a(t.geometry),u=c(t.material);let f=t.count,d=t.instanceMatrix,p=t.instanceColor;o=new Tc(h,u,f),o.instanceMatrix=new _i(new Float32Array(d.array),16),p!==void 0&&(o.instanceColor=new _i(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":h=a(t.geometry),u=c(t.material),o=new Rc(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,u),o.geometry=h,o.perObjectFrustumCulled=t.perObjectFrustumCulled,o.sortObjects=t.sortObjects,o._drawRanges=t.drawRanges,o._reservedRanges=t.reservedRanges,o._visibility=t.visibility,o._active=t.active,o._bounds=t.bounds.map(_=>{let g=new Ne;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);let m=new Oe;return m.radius=_.sphereRadius,m.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:m}}),o._maxInstanceCount=t.maxInstanceCount,o._maxVertexCount=t.maxVertexCount,o._maxIndexCount=t.maxIndexCount,o._geometryInitialized=t.geometryInitialized,o._geometryCount=t.geometryCount,o._matricesTexture=l(t.matricesTexture.uuid),t.colorsTexture!==void 0&&(o._colorsTexture=l(t.colorsTexture.uuid));break;case"LOD":o=new wc;break;case"Line":o=new $n(a(t.geometry),c(t.material));break;case"LineLoop":o=new Ic(a(t.geometry),c(t.material));break;case"LineSegments":o=new On(a(t.geometry),c(t.material));break;case"PointCloud":case"Points":o=new Lc(a(t.geometry),c(t.material));break;case"Sprite":o=new Sc(c(t.material));break;case"Group":o=new Ge;break;case"Bone":o=new uo;break;default:o=new Se}if(o.uuid=t.uuid,t.name!==void 0&&(o.name=t.name),t.matrix!==void 0?(o.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=t.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(t.position!==void 0&&o.position.fromArray(t.position),t.rotation!==void 0&&o.rotation.fromArray(t.rotation),t.quaternion!==void 0&&o.quaternion.fromArray(t.quaternion),t.scale!==void 0&&o.scale.fromArray(t.scale)),t.up!==void 0&&o.up.fromArray(t.up),t.castShadow!==void 0&&(o.castShadow=t.castShadow),t.receiveShadow!==void 0&&(o.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(o.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(o.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(o.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(o.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(o.visible=t.visible),t.frustumCulled!==void 0&&(o.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(o.renderOrder=t.renderOrder),t.userData!==void 0&&(o.userData=t.userData),t.layers!==void 0&&(o.layers.mask=t.layers),t.children!==void 0){let f=t.children;for(let d=0;d<f.length;d++)o.add(this.parseObject(f[d],e,n,i,r))}if(t.animations!==void 0){let f=t.animations;for(let d=0;d<f.length;d++){let p=f[d];o.animations.push(r[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(o.autoUpdate=t.autoUpdate);let f=t.levels;for(let d=0;d<f.length;d++){let p=f[d],_=o.getObjectByProperty("uuid",p.object);_!==void 0&&o.addLevel(_,p.distance,p.hysteresis)}}return o}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=e[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){let n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new Se}})}},IM={UVMapping:Ml,CubeReflectionMapping:mi,CubeRefractionMapping:Ii,EquirectangularReflectionMapping:qr,EquirectangularRefractionMapping:Yr,CubeUVReflectionMapping:gr},Zd={RepeatWrapping:Zr,ClampToEdgeWrapping:In,MirroredRepeatWrapping:Jr},Jd={NearestFilter:Ye,NearestMipmapNearestFilter:sf,NearestMipmapLinearFilter:Js,LinearFilter:ke,LinearMipmapNearestFilter:Or,LinearMipmapLinearFilter:qn},bu=class extends cn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=ui.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ui.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),ui.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});ui.add(t,c),r.manager.itemStart(t)}},Ea,Io=class{static getContext(){return Ea===void 0&&(Ea=new(window.AudioContext||window.webkitAudioContext)),Ea}static setContext(t){Ea=t}},Su=class extends cn{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new Hn(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(c){try{let l=c.slice(0);Io.getContext().decodeAudioData(l,function(u){e(u)}).catch(a)}catch(l){a(l)}},n,i);function a(c){i?i(c):console.error(c),r.manager.itemError(t)}}},$d=new ne,Kd=new ne,Ji=new ne,wu=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Be,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Be,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){let e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,Ji.copy(t.projectionMatrix);let i=e.eyeSep/2,r=i*e.near/e.focus,o=e.near*Math.tan(cs*e.fov*.5)/e.zoom,a,c;Kd.elements[12]=-i,$d.elements[12]=i,a=-o*e.aspect+r,c=o*e.aspect+r,Ji.elements[0]=2*e.near/(c-a),Ji.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(Ji),a=-o*e.aspect-r,c=o*e.aspect-r,Ji.elements[0]=2*e.near/(c-a),Ji.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(Ji)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Kd),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply($d)}},ml=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=jd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function jd(){return performance.now()}var $i=new L,Qd=new on,LM=new L,Ki=new L,Eu=class extends Se{constructor(){super(),this.type="AudioListener",this.context=Io.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new ml}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);let e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose($i,Qd,LM),Ki.set(0,0,-1).applyQuaternion(Qd),e.positionX){let i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime($i.x,i),e.positionY.linearRampToValueAtTime($i.y,i),e.positionZ.linearRampToValueAtTime($i.z,i),e.forwardX.linearRampToValueAtTime(Ki.x,i),e.forwardY.linearRampToValueAtTime(Ki.y,i),e.forwardZ.linearRampToValueAtTime(Ki.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition($i.x,$i.y,$i.z),e.setOrientation(Ki.x,Ki.y,Ki.z,n.x,n.y,n.z)}},gl=class extends Se{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}},ji=new L,tp=new on,UM=new L,Qi=new L,Au=class extends gl{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ji,tp,UM),Qi.set(0,0,1).applyQuaternion(tp);let e=this.panner;if(e.positionX){let n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(ji.x,n),e.positionY.linearRampToValueAtTime(ji.y,n),e.positionZ.linearRampToValueAtTime(ji.z,n),e.orientationX.linearRampToValueAtTime(Qi.x,n),e.orientationY.linearRampToValueAtTime(Qi.y,n),e.orientationZ.linearRampToValueAtTime(Qi.z,n)}else e.setPosition(ji.x,ji.y,ji.z),e.setOrientation(Qi.x,Qi.y,Qi.z)}},Tu=class{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0,e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}},xl=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;let a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){on.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let o=this._workIndex*r;on.multiplyQuaternionsFlat(t,o,t,e,t,n),on.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=e+a;t[c]=t[c]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){let a=e+o;t[a]=t[a]+t[n+o]*i}}},yf="\\[\\]\\.:\\/",DM=new RegExp("["+yf+"]","g"),Mf="[^"+yf+"]",NM="[^"+yf.replace("\\.","")+"]",OM=/((?:WC+[\/:])*)/.source.replace("WC",Mf),FM=/(WCOD+)?/.source.replace("WCOD",NM),BM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mf),zM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mf),kM=new RegExp("^"+OM+FM+BM+zM+"$"),HM=["material","materials","bones","map"],Ru=class{constructor(t,e,n){let i=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(DM,"")}static parseTrackName(t){let e=kM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);HM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Ru;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cu=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Sn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){let t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length,a,c=t.length,l=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let f=arguments[h],d=f.uuid,p=e[d];if(p===void 0){p=c++,e[d]=p,t.push(f);for(let _=0,g=o;_!==g;++_)r[_].push(new we(f,n[_],i[_]))}else if(p<l){a=t[p];let _=--l,g=t[_];e[g.uuid]=p,t[p]=g,e[d]=_,t[_]=f;for(let m=0,y=o;m!==y;++m){let v=r[m],M=v[_],B=v[p];v[p]=M,B===void 0&&(B=new we(f,n[m],i[m])),v[_]=B}}else t[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let c=arguments[o],l=c.uuid,h=e[l];if(h!==void 0&&h>=r){let u=r++,f=t[u];e[f.uuid]=h,t[h]=f,e[l]=u,t[u]=c;for(let d=0,p=i;d!==p;++d){let _=n[d],g=_[u],m=_[h];_[h]=g,_[u]=m}}}this.nCachedObjects_=r}uncache(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,o=t.length;for(let a=0,c=arguments.length;a!==c;++a){let l=arguments[a],h=l.uuid,u=e[h];if(u!==void 0)if(delete e[h],u<r){let f=--r,d=t[f],p=--o,_=t[p];e[d.uuid]=u,t[u]=d,e[_.uuid]=f,t[f]=_,t.pop();for(let g=0,m=i;g!==m;++g){let y=n[g],v=y[f],M=y[p];y[u]=v,y[f]=M,y.pop()}}else{let f=--o,d=t[f];f>0&&(e[d.uuid]=u),t[u]=d,t.pop();for(let p=0,_=i;p!==_;++p){let g=n[p];g[u]=g[f],g.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){let n=this._bindingsIndicesByPath,i=n[t],r=this._bindings;if(i!==void 0)return r[i];let o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,h=this.nCachedObjects_,u=new Array(l);i=r.length,n[t]=i,o.push(t),a.push(e),r.push(u);for(let f=h,d=c.length;f!==d;++f){let p=c[f];u[f]=new we(p,t,e)}return u}unsubscribe_(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=t[a];e[l]=n,o[n]=c,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}},_l=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,o=r.length,a=new Array(o),c={endingStart:is,endingEnd:is};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Vp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){let i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);let o=this._updateTime(e),a=this._updateWeight(t);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case pf:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Rl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,o=n===Gp;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===Hp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){let l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=ss,i.endingEnd=ss):(t?i.endingStart=this.zeroSlopeAtStart?ss:is:i.endingStart=Kr,e?i.endingEnd=this.zeroSlopeAtEnd?ss:is:i.endingEnd=Kr)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}},VM=new Float32Array(1),Pu=class extends Dn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let f=i[u],d=f.name,p=h[d];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,d));continue}let _=e&&e._propertyBindings[u].binding.parsedPath;p=new xl(we.create(n,d,_),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,d),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{let a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;let u=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new Ao(new Float32Array(2),new Float32Array(2),1,VM),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,o=typeof t=="string"?Ss.findByName(i,t):t,a=o!==null?o.uuid:t,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Rl),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new _l(this,o,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?Ss.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Iu=class s{constructor(t){this.value=t}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},GM=0,Lu=class extends Dn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:GM++}),this.name="",this.usage=eo,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){let e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;let e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){let r=Array.isArray(e[n])?e[n]:[e[n]];for(let o=0;o<r.length;o++)this.uniforms.push(r[o].clone())}return this}clone(){return new this.constructor().copy(this)}},Fi=class extends gs{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},Uu=class{constructor(t,e,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}},ep=new ne,Du=class{constructor(t,e,n=0,i=1/0){this.ray=new Li(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ep.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ep),this}intersectObject(t,e=!0,n=[]){return Nu(t,this,n,e),n.sort(np),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Nu(t[i],this,n,e);return n.sort(np),n}};function np(s,t){return s.distance-t.distance}function Nu(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Nu(r[o],t,e,!0)}}var Ou=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(De(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Fu=class{constructor(t=1,e=0,n=0){return this.radius=t,this.theta=e,this.y=n,this}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}},Bu=class s{constructor(t,e,n,i){s.prototype.isMatrix2=!0,this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}},ip=new vt,zu=class{constructor(t=new vt(1/0,1/0),e=new vt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ip.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ip).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},sp=new L,Aa=new L,Lo=class{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){sp.subVectors(t,this.start),Aa.subVectors(this.end,this.start);let n=Aa.dot(Aa),r=Aa.dot(sp)/n;return e&&(r=De(r,0,1)),r}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},rp=new L,ku=class extends Se{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";let n=new he,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){let l=o/c*Math.PI*2,h=a/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Yt(i,3));let r=new Je({fog:!1,toneMapped:!1});this.cone=new On(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);let t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),rp.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(rp),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Ci=new L,Ta=new ne,Ph=new ne,Hu=class extends On{constructor(t){let e=ym(t),n=new he,i=[],r=[],o=new Gt(0,0,1),a=new Gt(0,1,0);for(let l=0;l<e.length;l++){let h=e[l];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new Yt(i,3)),n.setAttribute("color",new Yt(r,3));let c=new Je({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){let e=this.bones,n=this.geometry,i=n.getAttribute("position");Ph.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){let a=e[r];a.parent&&a.parent.isBone&&(Ta.multiplyMatrices(Ph,a.matrixWorld),Ci.setFromMatrixPosition(Ta),i.setXYZ(o,Ci.x,Ci.y,Ci.z),Ta.multiplyMatrices(Ph,a.parent.matrixWorld),Ci.setFromMatrixPosition(Ta),i.setXYZ(o+1,Ci.x,Ci.y,Ci.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}};function ym(s){let t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push.apply(t,ym(s.children[e]));return t}var Vu=class extends ce{constructor(t,e,n){let i=new wo(e,4,2),r=new Nn({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},WM=new L,op=new Gt,ap=new Gt,Gu=class extends Se{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new So(e);i.rotateY(Math.PI*.5),this.material=new Nn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new Me(o,3)),this.add(new ce(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=t.geometry.getAttribute("color");op.copy(this.light.color),ap.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){let r=n<i/2?op:ap;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(WM.setFromMatrixPosition(this.light.matrixWorld).negate())}},Wu=class extends On{constructor(t=10,e=10,n=4473924,i=8947848){n=new Gt(n),i=new Gt(i);let r=e/2,o=t/e,a=t/2,c=[],l=[];for(let f=0,d=0,p=-a;f<=e;f++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);let _=f===r?n:i;_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3}let h=new he;h.setAttribute("position",new Yt(c,3)),h.setAttribute("color",new Yt(l,3));let u=new Je({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},Xu=class extends On{constructor(t=10,e=16,n=8,i=64,r=4473924,o=8947848){r=new Gt(r),o=new Gt(o);let a=[],c=[];if(e>1)for(let u=0;u<e;u++){let f=u/e*(Math.PI*2),d=Math.sin(f)*t,p=Math.cos(f)*t;a.push(0,0,0),a.push(d,0,p);let _=u&1?r:o;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let u=0;u<n;u++){let f=u&1?r:o,d=t-t/n*u;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),g=Math.sin(_)*d,m=Math.cos(_)*d;a.push(g,0,m),c.push(f.r,f.g,f.b),_=(p+1)/i*(Math.PI*2),g=Math.sin(_)*d,m=Math.cos(_)*d,a.push(g,0,m),c.push(f.r,f.g,f.b)}}let l=new he;l.setAttribute("position",new Yt(a,3)),l.setAttribute("color",new Yt(c,3));let h=new Je({vertexColors:!0,toneMapped:!1});super(l,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},cp=new L,Ra=new L,lp=new L,qu=class extends Se{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new he;i.setAttribute("position",new Yt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let r=new Je({fog:!1,toneMapped:!1});this.lightPlane=new $n(i,r),this.add(this.lightPlane),i=new he,i.setAttribute("position",new Yt([0,0,0,0,0,1],3)),this.targetLine=new $n(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),cp.setFromMatrixPosition(this.light.matrixWorld),Ra.setFromMatrixPosition(this.light.target.matrixWorld),lp.subVectors(Ra,cp),this.lightPlane.lookAt(Ra),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ra),this.targetLine.scale.z=lp.length()}},Ca=new L,Ue=new or,Yu=class extends On{constructor(t){let e=new he,n=new Je({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,_){c(p),c(_)}function c(p){i.push(0,0,0),r.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}e.setAttribute("position",new Yt(i,3)),e.setAttribute("color",new Yt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();let l=new Gt(16755200),h=new Gt(16711680),u=new Gt(43775),f=new Gt(16777215),d=new Gt(3355443);this.setColors(l,h,u,f,d)}setColors(t,e,n,i,r){let a=this.geometry.getAttribute("color");a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){let t=this.geometry,e=this.pointMap,n=1,i=1;Ue.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Fe("c",e,t,Ue,0,0,-1),Fe("t",e,t,Ue,0,0,1),Fe("n1",e,t,Ue,-n,-i,-1),Fe("n2",e,t,Ue,n,-i,-1),Fe("n3",e,t,Ue,-n,i,-1),Fe("n4",e,t,Ue,n,i,-1),Fe("f1",e,t,Ue,-n,-i,1),Fe("f2",e,t,Ue,n,-i,1),Fe("f3",e,t,Ue,-n,i,1),Fe("f4",e,t,Ue,n,i,1),Fe("u1",e,t,Ue,n*.7,i*1.1,-1),Fe("u2",e,t,Ue,-n*.7,i*1.1,-1),Fe("u3",e,t,Ue,0,i*2,-1),Fe("cf1",e,t,Ue,-n,0,1),Fe("cf2",e,t,Ue,n,0,1),Fe("cf3",e,t,Ue,0,-i,1),Fe("cf4",e,t,Ue,0,i,1),Fe("cn1",e,t,Ue,-n,0,-1),Fe("cn2",e,t,Ue,n,0,-1),Fe("cn3",e,t,Ue,0,-i,-1),Fe("cn4",e,t,Ue,0,i,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function Fe(s,t,e,n,i,r,o){Ca.set(i,r,o).unproject(n);let a=t[s];if(a!==void 0){let c=e.getAttribute("position");for(let l=0,h=a.length;l<h;l++)c.setXYZ(a[l],Ca.x,Ca.y,Ca.z)}}var Pa=new Ne,Zu=class extends On{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new he;r.setIndex(new Me(n,1)),r.setAttribute("position",new Me(i,3)),super(r,new Je({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Pa.setFromObject(this.object),Pa.isEmpty())return;let e=Pa.min,n=Pa.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},Ju=class extends On{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new he;r.setIndex(new Me(n,1)),r.setAttribute("position",new Yt(i,3)),super(r,new Je({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}},$u=class extends $n{constructor(t,e=1,n=16776960){let i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new he;o.setAttribute("position",new Yt(r,3)),o.computeBoundingSphere(),super(o,new Je({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;let a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new he;c.setAttribute("position",new Yt(a,3)),c.computeBoundingSphere(),this.add(new ce(c,new Nn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},hp=new L,Ia,Ih,Ku=class extends Se{constructor(t=new L(0,0,1),e=new L(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Ia===void 0&&(Ia=new he,Ia.setAttribute("position",new Yt([0,0,0,0,1,0],3)),Ih=new Ui(0,.5,1,5,1),Ih.translate(0,-.5,0)),this.position.copy(e),this.line=new $n(Ia,new Je({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ce(Ih,new Nn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{hp.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(hp,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},ju=class extends On{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new he;i.setAttribute("position",new Yt(e,3)),i.setAttribute("color",new Yt(n,3));let r=new Je({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){let i=new Gt,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},Qu=class{constructor(){this.type="ShapePath",this.color=new Gt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new xs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){let y=[];for(let v=0,M=m.length;v<M;v++){let B=m[v],R=new wn;R.curves=B.curves,y.push(R)}return y}function n(m,y){let v=y.length,M=!1;for(let B=v-1,R=0;R<v;B=R++){let P=y[B],z=y[R],rt=z.x-P.x,b=z.y-P.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(P=y[R],rt=-rt,z=y[B],b=-b),m.y<P.y||m.y>z.y)continue;if(m.y===P.y){if(m.x===P.x)return!0}else{let T=b*(m.x-P.x)-rt*(m.y-P.y);if(T===0)return!0;if(T<0)continue;M=!M}}else{if(m.y!==P.y)continue;if(z.x<=m.x&&m.x<=P.x||P.x<=m.x&&m.x<=z.x)return!0}}return M}let i=Un.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c,l=[];if(r.length===1)return a=r[0],c=new wn,c.curves=a.curves,l.push(c),l;let h=!i(r[0].getPoints());h=t?!h:h;let u=[],f=[],d=[],p=0,_;f[p]=void 0,d[p]=[];for(let m=0,y=r.length;m<y;m++)a=r[m],_=a.getPoints(),o=i(_),o=t?!o:o,o?(!h&&f[p]&&p++,f[p]={s:new wn,p:_},f[p].s.curves=a.curves,h&&p++,d[p]=[]):d[p].push({h:a,p:_[0]});if(!f[0])return e(r);if(f.length>1){let m=!1,y=0;for(let v=0,M=f.length;v<M;v++)u[v]=[];for(let v=0,M=f.length;v<M;v++){let B=d[v];for(let R=0;R<B.length;R++){let P=B[R],z=!0;for(let rt=0;rt<f.length;rt++)n(P.p,f[rt].p)&&(v!==rt&&y++,z?(z=!1,u[rt].push(P)):m=!0);z&&u[v].push(P)}}y>0&&m===!1&&(d=u)}let g;for(let m=0,y=f.length;m<y;m++){c=f[m].s,l.push(c),g=d[m];for(let v=0,M=g.length;v<M;v++)c.holes.push(g[v].h)}return l}},tf=class extends Dn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}},ef=class extends En{constructor(t=1,e=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(t,e,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl);var Mm=new Ne,Ul=new L,vr=class extends mr{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Yt(t,3)),this.setAttribute("uv",new Yt(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Fi(e,6,1);return this.setAttribute("instanceStart",new an(n,3,0)),this.setAttribute("instanceEnd",new an(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Fi(e,6,1);return this.setAttribute("instanceColorStart",new an(n,3,0)),this.setAttribute("instanceColorEnd",new an(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new fr(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ne);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Mm.setFromBufferAttribute(e),this.boundingBox.union(Mm))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oe),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ul.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ul)),Ul.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ul));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};kt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new vt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};rn.line={uniforms:Oo.merge([kt.common,kt.fog,kt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var yr=class extends mn{constructor(t){super({type:"LineMaterial",uniforms:Oo.clone(rn.line.uniforms),vertexShader:rn.line.vertexShader,fragmentShader:rn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var bf=new ve,bm=new L,Sm=new L,$e=new ve,Ke=new ve,jn=new ve,Sf=new L,wf=new ne,je=new Lo,wm=new L,Dl=new Ne,Nl=new Oe,Qn=new ve,ti,As;function Em(s,t,e){return Qn.set(0,0,-t,1).applyMatrix4(s.projectionMatrix),Qn.multiplyScalar(1/Qn.w),Qn.x=As/e.width,Qn.y=As/e.height,Qn.applyMatrix4(s.projectionMatrixInverse),Qn.multiplyScalar(1/Qn.w),Math.abs(Math.max(Qn.x,Qn.y))}function XM(s,t){let e=s.matrixWorld,n=s.geometry,i=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let a=0,c=o;a<c;a++){je.start.fromBufferAttribute(i,a),je.end.fromBufferAttribute(r,a),je.applyMatrix4(e);let l=new L,h=new L;ti.distanceSqToSegment(je.start,je.end,h,l),h.distanceTo(l)<As*.5&&t.push({point:h,pointOnLine:l,distance:ti.origin.distanceTo(h),object:s,face:null,faceIndex:a,uv:null,uv1:null})}}function qM(s,t,e){let n=t.projectionMatrix,r=s.material.resolution,o=s.matrixWorld,a=s.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,h=Math.min(a.instanceCount,c.count),u=-t.near;ti.at(1,jn),jn.w=1,jn.applyMatrix4(t.matrixWorldInverse),jn.applyMatrix4(n),jn.multiplyScalar(1/jn.w),jn.x*=r.x/2,jn.y*=r.y/2,jn.z=0,Sf.copy(jn),wf.multiplyMatrices(t.matrixWorldInverse,o);for(let f=0,d=h;f<d;f++){if($e.fromBufferAttribute(c,f),Ke.fromBufferAttribute(l,f),$e.w=1,Ke.w=1,$e.applyMatrix4(wf),Ke.applyMatrix4(wf),$e.z>u&&Ke.z>u)continue;if($e.z>u){let v=$e.z-Ke.z,M=($e.z-u)/v;$e.lerp(Ke,M)}else if(Ke.z>u){let v=Ke.z-$e.z,M=(Ke.z-u)/v;Ke.lerp($e,M)}$e.applyMatrix4(n),Ke.applyMatrix4(n),$e.multiplyScalar(1/$e.w),Ke.multiplyScalar(1/Ke.w),$e.x*=r.x/2,$e.y*=r.y/2,Ke.x*=r.x/2,Ke.y*=r.y/2,je.start.copy($e),je.start.z=0,je.end.copy(Ke),je.end.z=0;let _=je.closestPointToPointParameter(Sf,!0);je.at(_,wm);let g=Es.lerp($e.z,Ke.z,_),m=g>=-1&&g<=1,y=Sf.distanceTo(wm)<As*.5;if(m&&y){je.start.fromBufferAttribute(c,f),je.end.fromBufferAttribute(l,f),je.start.applyMatrix4(o),je.end.applyMatrix4(o);let v=new L,M=new L;ti.distanceSqToSegment(je.start,je.end,M,v),e.push({point:M,pointOnLine:v,distance:ti.origin.distanceTo(M),object:s,face:null,faceIndex:f,uv:null,uv1:null})}}}var Ol=class extends ce{constructor(t=new vr,e=new yr({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,i=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)bm.fromBufferAttribute(e,o),Sm.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+bm.distanceTo(Sm);let r=new Fi(i,2,1);return t.setAttribute("instanceDistanceStart",new an(r,1,0)),t.setAttribute("instanceDistanceEnd",new an(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,i=t.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;ti=t.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;As=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Nl.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=As*.5;else{let u=Math.max(i.near,Nl.distanceToPoint(ti.origin));l=Em(i,u,c.resolution)}if(Nl.radius+=l,ti.intersectsSphere(Nl)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Dl.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=As*.5;else{let u=Math.max(i.near,Dl.distanceToPoint(ti.origin));h=Em(i,u,c.resolution)}Dl.expandByScalar(h),ti.intersectsBox(Dl)!==!1&&(n?XM(this,e):qM(this,i,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(bf),this.material.uniforms.resolution.value.set(bf.z,bf.w))}};function Ef(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new he,l=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Am(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let p=Am(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}return c}function Am(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Me(o,e,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){let _=h.getComponent(f,p);a.setComponent(f+u,p,_)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var Tm=["#e8554e","#f2c94c","#4f8fd9","#58b368","#ffffff","#b07fd1","#f08a3c","#2f3e4e","#e86f8a","#3bb3a8"],Rm=["#3c5a85","#2b2b30","#c8b28a","#6b6f75","#4b3a2f","#355e3b"],Cm=["#f5d1b5","#e8b796","#c98f6a","#a86f4c","#7a4d33","#f2c7a5"],Fl=["#e8554e","#f2f2f2","#2f3e4e","#4f8fd9","#f2c94c","#9aa3ab","#58b368","#7a2f3a","#1d1d22","#e9a23b"],Pm=["#ffffff","#f2c94c","#d9483b","#8a5a3c"],Im=["Hi!","Hey!","Ciao!","Hola!","Salut!","Hallo!","Nice house!","Vote me!","Coffee?","lol","Who's the mayor?","Love this town","New neighbour?","Big city soon!","30 houses!","See the fountain?","...","Ahaha","Pizza?","Same!"];function Lm(s){let{THREE:t,Kit:e,PAL:n}=s,i=new t.MeshBasicMaterial({color:n.win}),r={glowMat:i};if(!s.ALIVE)return r.build=()=>{},r.occupied=()=>[],r.view=()=>{},r.step=()=>!1,r;let o=new t.DirectionalLight(12376063,0),a=new t.DirectionalLight(16769976,0);o.position.set(.7,.55,-.45),a.position.set(-.15,.35,-1),s.scene.add(o,a);let c=new t.Color("#cfe8f0");s.scene.fog=new t.Fog(c,1e9,2e9);let l=new t.Color(n.win),h=new t.Color("#ffd27a"),u=new t.Color(16773596),f=new t.Color("#ffe2bd"),d=Math.tan(15*Math.PI/180),p=0,_=(()=>{let S=document.createElement("canvas");S.width=S.height=64;let x=S.getContext("2d"),E=x.createRadialGradient(32,32,0,32,32,32);return E.addColorStop(0,"rgba(255,236,170,1)"),E.addColorStop(.35,"rgba(255,214,120,.45)"),E.addColorStop(1,"rgba(255,200,90,0)"),x.fillStyle=E,x.fillRect(0,0,64,64),new t.CanvasTexture(S)})(),g=[];r.view=()=>{let S=s.view.h,x=Math.min(1,Math.max(0,(3-S)/2.4)),E=x*x*(3-2*x);p=E,s.hemi.intensity=1.9-.55*E,s.sun.intensity=1.7+.2*E,s.sun.color.copy(u).lerp(f,E),o.intensity=.55*E,a.intensity=.95*E;let F=S/2/d;E>.01?(s.scene.fog.near=F*(1+(1-E)*8),s.scene.fog.far=s.scene.fog.near+F*(1.5+(1-E)*10)):(s.scene.fog.near=1e9,s.scene.fog.far=2e9),i.color.copy(l).lerp(h,.8*E);for(let N of g)N.opacity=.85*E};let m=S=>{let x=new e;return S(x),x.geo()},y={torso:m(S=>{S.box(0,.82,0,.5,.62,.3,"#ffffff"),S.box(-.32,.88,0,.13,.54,.15,"#ffffff"),S.box(.32,.88,0,.13,.54,.15,"#ffffff")}),head:m(S=>{S.box(0,1.44,0,.36,.36,.33,"#ffffff"),S.box(0,1.76,-.02,.39,.1,.37,"#4a3a2c"),S.box(0,1.5,-.16,.38,.26,.07,"#4a3a2c"),S.box(-.08,1.58,.17,.05,.05,.02,"#1a1a1a"),S.box(.08,1.58,.17,.05,.05,.02,"#1a1a1a")}),leg:m(S=>{S.box(0,-.82,0,.18,.82,.2,"#ffffff"),S.box(0,-.85,.04,.2,.12,.27,"#3a3a3a")}),carBody:m(S=>{S.box(0,.3,0,4.1,.72,1.76,"#ffffff"),S.box(-.25,1.02,0,2.2,.62,1.56,"#ffffff")}),carDet:m(S=>{for(let x of[-1.3,1.3])for(let E of[-.8,.8])S.box(x,0,E,.66,.6,.24,"#222222");S.box(-.25,1.08,0,2.24,.42,1.6,"#2e4652"),S.box(2.06,.58,.58,.05,.18,.34,"#fff4c0"),S.box(2.06,.58,-.58,.05,.18,.34,"#fff4c0"),S.box(-2.06,.62,.62,.05,.16,.3,"#c0352b"),S.box(-2.06,.62,-.62,.05,.16,.3,"#c0352b")}),vanBody:m(S=>{S.box(-.4,.36,0,4.4,2.1,1.96,"#ffffff"),S.box(2.15,.36,0,1.1,1.35,1.9,"#ffffff")}),vanDet:m(S=>{for(let x of[-1.7,1.8])for(let E of[-.85,.85])S.box(x,0,E,.72,.66,.24,"#222222");S.box(2.15,1.1,0,1.14,.5,1.94,"#2e4652"),S.box(-.4,1.05,0,4.44,.22,2,"#f2c94c"),S.box(2.72,.6,.6,.05,.2,.32,"#fff4c0"),S.box(2.72,.6,-.6,.05,.2,.32,"#fff4c0")})},v=()=>new t.MeshLambertMaterial({vertexColors:!0}),M={p:v(),c:v(),flat:new t.MeshLambertMaterial({vertexColors:!0,depthTest:!1,depthWrite:!1,side:t.DoubleSide}),gold:new t.MeshLambertMaterial({color:"#f5c542",emissive:"#6b4a00"})},B=new t.MeshBasicMaterial({color:"#d4f3ff",transparent:!0,opacity:.85});function R(S,x,E,F,N){let U=new t.Matrix4().makeRotationY(F).setPosition(x,0,E),C=y.carBody.clone(),O=C.attributes.color,J=new t.Color(N);for(let X=0;X<O.count;X++)O.setXYZ(X,J.r,J.g,J.b);C.applyMatrix4(U),S.parts.push(C);let Q=y.carDet.clone();Q.applyMatrix4(U),S.parts.push(Q)}function P(){let S=new e;S.cyl(0,0,0,1.9,1.9,30,10,"#f7f7f4");let x=S.geo();x.rotateZ(-Math.PI/2),x.translate(-2,2.6,0);let E=new e;E.parts.push(x),E.ico(13.4,2.6,0,1.95,"#f7f7f4",1),E.box(13.9,3,0,1.2,.7,2.6,"#2e4652"),E.box(-1,1.6,0,6,.4,32,"#e9eaec"),E.box(-1.2,1.62,0,6.1,.42,3.8,"#f7f7f4");for(let N of[-6.5,6.5]){let U=new e;U.cyl(0,0,0,.95,.95,4,8,"#c7cbd1");let C=U.geo();C.rotateZ(-Math.PI/2),C.translate(.5,.75,N),E.parts.push(C)}E.box(-15,3.4,0,4.4,6.6,.45,n.sun),E.box(-15.4,3.6,0,3.4,.35,11,"#e9eaec"),E.box(-2,3.2,1.92,26,.5,.06,"#2e4652"),E.box(-2,3.2,-1.92,26,.5,.06,"#2e4652"),E.box(-2,1.75,1.93,28,.35,.06,n.sun),E.box(-2,1.75,-1.93,28,.35,.06,n.sun);let F=new t.Mesh(E.geo(),M.c);return F.castShadow=!0,F.renderOrder=10,F}let z=new Map;function rt(S,x={}){let E=S+JSON.stringify(x);if(z.has(E))return z.get(E);let F=document.createElement("canvas"),N=F.getContext("2d"),U=x.font||"700 44px Figtree,system-ui,sans-serif";N.font=U;let C=Math.ceil(N.measureText(S).width)+44;if(F.width=x.w||C,F.height=x.h||84,N.font=U,N.textAlign="center",N.textBaseline="middle",x.bg)N.fillStyle=x.bg,N.fillRect(0,0,F.width,F.height);else{N.fillStyle="#ffffff",N.strokeStyle="#10232b",N.lineWidth=6;let J=30,Q=F.width-8,X=F.height-22;N.beginPath(),N.roundRect(4,4,Q,X,J),N.fill(),N.stroke(),N.beginPath(),N.moveTo(F.width/2-10,X+2),N.lineTo(F.width/2,F.height-3),N.lineTo(F.width/2+10,X+2),N.fill()}N.fillStyle=x.color||"#10232b",N.fillText(S,F.width/2,(x.bg?F.height:F.height-18)/2+2);let O=new t.CanvasTexture(F);return O.colorSpace=t.SRGBColorSpace,O.anisotropy=4,O._asp=F.width/F.height,z.set(E,O),O}function b(S,x,E,F,N){let U=rt(S,{bg:F,color:N,w:512,h:Math.round(512*E/x),font:"400 "+Math.round(512*E/x*.62)+'px "Lilita One",Figtree,system-ui,sans-serif'});return new t.Mesh(new t.PlaneGeometry(x,E),new t.MeshBasicMaterial({map:U}))}let T=(()=>{let S=document.createElement("canvas");S.width=128,S.height=80;let x=S.getContext("2d");x.fillStyle="#f5c542",x.fillRect(0,0,128,80),x.fillStyle="#e0a91c",x.fillRect(0,66,128,14),x.fillStyle="#fffaf0",x.strokeStyle="#8a5a00",x.lineWidth=4,x.beginPath(),x.ellipse(64,36,17,23,0,0,Math.PI*2),x.fill(),x.stroke(),x.fillStyle="#f5c542",x.beginPath(),x.ellipse(58,28,4,6,-.4,0,Math.PI*2),x.fill();let E=new t.CanvasTexture(S);return E.colorSpace=t.SRGBColorSpace,E})();function et(S,x){let E=Q=>Math.round(Q*10)/10,F=S.map(()=>[]);for(let Q of x){let X=null,mt=Q.maxd||4.5;for(let st=0;st<S.length;st++){let[bt,Wt,St,ue]=S[st],de=St-bt,Te=ue-Wt,ln=de*de+Te*Te||1,At=Math.max(0,Math.min(1,((Q.x-bt)*de+(Q.z-Wt)*Te)/ln)),ae=Math.hypot(Q.x-bt-de*At,Q.z-Wt-Te*At);ae<mt&&(mt=ae,X=[st,At])}Q.q=X,X&&F[X[0]].push(X[1])}let N=[],U=new Map,C=(Q,X)=>{let mt=E(Q)+","+E(X);if(U.has(mt))return U.get(mt);let st={id:N.length,x:Q,z:X,e:[]};return N.push(st),U.set(mt,st),st},O=(Q,X)=>{if(Q===X||Q.e.some(st=>st.to===X))return;let mt=Math.hypot(Q.x-X.x,Q.z-X.z);Q.e.push({to:X,len:mt}),X.e.push({to:Q,len:mt})},J=(Q,X)=>{let[mt,st,bt,Wt]=S[Q];return C(mt+(bt-mt)*X,st+(Wt-st)*X)};S.forEach((Q,X)=>{let mt=[...new Set([0,1,...F[X]])].sort((st,bt)=>st-bt);for(let st=1;st<mt.length;st++)O(J(X,mt[st-1]),J(X,mt[st]))});for(let Q of x)Q.node=Q.q?J(Q.q[0],Q.q[1]):null;return N.length?{nodes:N}:null}function nt(S,x,E){if(!x||!E)return null;if(x===E)return[x];let F=S.nodes.length,N=new Float64Array(F).fill(1/0),U=new Int32Array(F).fill(-1),C=[],O=(X,mt)=>{C.push([X,mt]);let st=C.length-1;for(;st;){let bt=st-1>>1;if(C[bt][0]<=C[st][0])break;[C[bt],C[st]]=[C[st],C[bt]],st=bt}},J=()=>{let X=C[0],mt=C.pop();if(C.length){C[0]=mt;let st=0;for(;;){let bt=2*st+1,Wt=bt+1,St=st;if(bt<C.length&&C[bt][0]<C[St][0]&&(St=bt),Wt<C.length&&C[Wt][0]<C[St][0]&&(St=Wt),St===st)break;[C[St],C[st]]=[C[st],C[St]],st=St}}return X};for(N[x.id]=0,O(0,x.id);C.length;){let[X,mt]=J();if(!(X>N[mt])){if(mt===E.id)break;for(let st of S.nodes[mt].e){let bt=X+st.len;bt<N[st.to.id]&&(N[st.to.id]=bt,U[st.to.id]=mt,O(bt,st.to.id))}}}if(N[E.id]===1/0)return null;let Q=[];for(let X=E.id;X!==-1;X=U[X])Q.push(S.nodes[X]);return Q.reverse()}function ot(S,x,E,F){let N=[x],U=null,C=x;for(let O=0;O<E;O++){let J=C.e.filter(X=>X.to!==U);if(J.length||(J=C.e),!J.length)break;let Q=J[Math.floor(F()*J.length)];U=C,C=Q.to,N.push(C)}return N}function yt(S,x){if(S.length===1)return[{x:S[0].x,z:S[0].z}];let E=[];for(let F=1;F<S.length;F++){let N=S[F-1],U=S[F],C=Math.hypot(U.x-N.x,U.z-N.z)||1,O=(U.x-N.x)/C,J=(U.z-N.z)/C,Q=-J*x,X=O*x;E.push({x:N.x+Q,z:N.z+X},{x:U.x+Q,z:U.z+X})}return E}function it(S,x,E,F,N,U,C,O){let J=(X,mt)=>{E.cyl(X,0,mt,.12,.09,4.2,5,"#3d4a52"),N.box(X,4.1,mt,.6,.45,.6,"#ffe7a3"),U.push([X,mt])},Q=[];if(O&&O.length>=3&&s.polyFill(F,O,"#9fd77a"),S==="park"&&O&&O.length>=3){let X=O,mt=(ht,xt,ut)=>s.inPoly(X,ht,xt)&&[[ut,0],[-ut,0],[0,ut],[0,-ut]].every(([Pt,Ht])=>s.inPoly(X,ht+Pt,xt+Ht)),st=0,bt=0,Wt=-1,St=X.map(ht=>ht[0]),ue=X.map(ht=>ht[1]),de=Math.min(...St),Te=Math.max(...St),ln=Math.min(...ue),At=Math.max(...ue),ae=(ht,xt)=>{let ut=1e9;for(let Pt=0;Pt<X.length;Pt++){let[Ht,jt]=X[Pt],[Xt,le]=X[(Pt+1)%X.length],$t=Xt-Ht,pe=le-jt,Re=$t*$t+pe*pe||1,xe=Math.max(0,Math.min(1,((ht-Ht)*$t+(xt-jt)*pe)/Re));ut=Math.min(ut,Math.hypot(ht-Ht-$t*xe,xt-jt-pe*xe))}return ut};for(let ht=de;ht<=Te;ht+=2)for(let xt=ln;xt<=At;xt+=2)if(s.inPoly(X,ht,xt)){let ut=ae(ht,xt)-.02*Math.hypot(ht,xt+4);ut>Wt&&(Wt=ut,st=ht,bt=xt)}let w=Math.max(5.5,Math.min(9,Wt-3));for(let ht=0;ht<28;ht++){let xt=ht/28*Math.PI*2,ut=(ht+1)/28*Math.PI*2,Pt=st+Math.cos((xt+ut)/2)*w,Ht=bt+Math.sin((xt+ut)/2)*w;F.quadR(Pt,Ht,w*2*Math.PI/28+.3,1.6,-(xt+ut)/2-Math.PI/2,.01,n.gravel)}{let ht=1/0,xt=-1;for(let ut=0;ut<X.length;ut++){let[Pt,Ht]=X[ut],[jt,Xt]=X[(ut+1)%X.length],le=jt-Pt,$t=Xt-Ht;if(Math.abs(le)<1e-9)continue;let pe=(st-Pt)/le,Re=bt-(Ht+$t*pe);pe>=0&&pe<=1&&Re>0&&Re<ht&&(ht=Re,xt=ut)}if(xt>=0){let[ut,Pt]=X[xt],[Ht,jt]=X[(xt+1)%X.length],Xt=Ht-ut,le=jt-Pt,$t=((st-ut)*Xt+(bt-Pt)*le)/(Xt*Xt+le*le),[pe,Re]=$t>.1&&$t<.9?[ut+Xt*$t,Pt+le*$t]:[st,bt-ht],xe=pe-st,te=Re-bt,Ae=Math.hypot(xe,te),ye=xe/Ae,Ve=te/Ae,gn=w-.6,Ie=Ae+.5;Ie>gn&&(F.quadR(st+ye*(gn+Ie)/2,bt+Ve*(gn+Ie)/2,Ie-gn,1.6,Math.atan2(-Ve,ye),.01,n.gravel),J(pe-Ve*1.8-ye*2,Re+ye*1.8-Ve*2))}}E.cyl(st,0,bt,4.4,4.4,.75,18,n.stone),E.cyl(st,.06,bt,4,4,.75,18,"#6fcbe9"),E.cyl(st,.75,bt,.6,.45,1.7,8,n.stone),E.cyl(st,2.4,bt,.45,1.8,.55,14,n.stone),E.cyl(st,2.46,bt,1.6,1.6,.5,14,"#8fdcf3"),E.cyl(st,2.9,bt,.26,.2,1.1,6,n.stone);let k=new t.Mesh(new t.CylinderGeometry(.06,.45,2.2,8,1,!0).translate(0,1.1,0),B);k.position.set(st,3.9,bt),k.renderOrder=11;let Z=new t.Mesh(new t.CylinderGeometry(1.75,1,1.2,14,1,!0).translate(0,-.6,0),B);Z.position.set(st,3,bt),Z.renderOrder=11,Q.push(ht=>{k.scale.set(1,.85+.2*Math.sin(ht*3.1)+.06*Math.sin(ht*11),1),Z.scale.set(1+.04*Math.sin(ht*5),1,1+.04*Math.sin(ht*5))});let Y=[];for(let ht=0;ht<6;ht++){let xt=ht/6*Math.PI*2+.5,ut=st+Math.cos(xt)*(w+1.6),Pt=bt+Math.sin(xt)*(w+1.6),Ht=-xt+Math.PI/2;ht%2===0&&mt(ut,Pt,1)&&(E.box(ut,0,Pt,2.2,.45,.6,"#8a6440",Ht),Y.push([st+Math.cos(xt)*(w+.4),bt+Math.sin(xt)*(w+.4)])),Y.push([st+Math.cos(xt+.5)*5.4,bt+Math.sin(xt+.5)*5.4])}let W=[];for(let ht=0;ht<260&&W.length<22;ht++){let xt=de+C()*(Te-de),ut=ln+C()*(At-ln);if(!(Math.hypot(xt-st,ut-bt)<w+3||!mt(xt,ut,2.2)||Math.abs(xt-st)<2.8&&ut<bt)&&!W.some(([Ht,jt])=>Math.hypot(Ht-xt,jt-ut)<4.2))if(W.push([xt,ut]),C()<.72)wt(E,xt,ut,.65+C()*.45,C()<.4?1:0,C);else for(let Ht=0;Ht<5;Ht++)E.box(xt-2+Ht*.95,0,ut,.7,.4,.7,["#e86f8a","#f2c94c","#ffffff","#b07fd1"][(Ht+W.length)%4])}return J(st+w+1.4,bt),J(st-w-1.4,bt),{anim:Q,objs:[k,Z],spots:Y,label:"the fountain"}}if(S==="park"){F.quad(-x/2+.5,-13.5,x/2-.5,13.5,0,"#9fd77a"),F.quad(-1.3,-13.5,1.3,13.5,.01,n.gravel),F.quad(-x/2+.5,-1.3,x/2-.5,1.3,.01,n.gravel),E.cyl(0,0,0,6.2,6.2,.06,20,n.piazza),E.cyl(0,0,0,4.4,4.4,.75,18,n.stone),E.cyl(0,.06,0,4,4,.75,18,"#6fcbe9"),E.cyl(0,.75,0,.6,.45,1.7,8,n.stone),E.cyl(0,2.4,0,.45,1.8,.55,14,n.stone),E.cyl(0,2.46,0,1.6,1.6,.5,14,"#8fdcf3"),E.cyl(0,2.9,0,.26,.2,1.1,6,n.stone);let X=new t.Mesh(new t.CylinderGeometry(.06,.45,2.2,8,1,!0).translate(0,1.1,0),B);X.position.y=3.9,X.renderOrder=11;let mt=new t.Mesh(new t.CylinderGeometry(1.75,1,1.2,14,1,!0).translate(0,-.6,0),B);mt.position.y=3,mt.renderOrder=11,Q.push(st=>{X.scale.set(1,.85+.2*Math.sin(st*3.1)+.06*Math.sin(st*11),1),mt.scale.set(1+.04*Math.sin(st*5),1,1+.04*Math.sin(st*5))});for(let[st,bt,Wt]of[[-3.2,-8,0],[3.2,-8,0],[-3.2,8,0],[3.2,8,0]])E.box(st,0,bt,2.2,.45,.6,"#8a6440",Wt),E.box(st,.45,bt+.3,2.2,.5,.12,"#8a6440",Wt);for(let[st,bt]of[[-7.5,-9.5],[7.5,-9.5],[-7.5,9.5],[7.5,9.5]])wt(E,st,bt,.85,0,C);for(let st=0;st<6;st++)E.box(-8.5+st*.9,0,-4,.7,.4,.7,["#e86f8a","#f2c94c","#ffffff","#b07fd1"][st%4]);for(let st=0;st<6;st++)E.box(4+st*.9,0,4,.7,.4,.7,["#f2c94c","#e86f8a","#b07fd1","#ffffff"][st%4]);return J(-2.2,-12),J(2.2,12),{anim:Q,objs:[X,mt],spots:[[-3.2,-7.2],[3.2,-7.2],[-3.2,7.2],[3.2,7.2],[5,0],[-5,0],[0,-5.2],[0,5.2]],label:"the fountain"}}if(S==="mall"){F.quad(-x/2+.5,-13.5,x/2-.5,-.5,0,"#9aa0a6");for(let Wt=0;Wt<=12;Wt++)F.quad(-18+Wt*3-.08,-6.2,-18+Wt*3+.08,-1,.01,"#f4f4f0");F.quad(-x/2+.5,-.5,x/2-.5,13.5,0,n.curb),E.box(0,0,7.4,40,7.6,11.6,"#ebe6de"),E.box(0,7.6,7.4,40.6,.5,12.2,"#cfc8bc"),N.box(0,.4,1.55,31,4.6,.12,"#9fd3ea"),E.box(0,4.6,.4,11,.35,2.6,"#c9553c"),E.box(0,.4,1.5,3.6,3.2,.16,"#3d5561"),E.box(0,7.9,1.8,15.5,2.9,.4,"#10232b");for(let[Wt,St]of[[-20,-12.5],[20,-12.5]])E.box(Wt,0,St,2,.6,2,n.stone),wt(E,Wt,St,.7,2,C);let X=b("OCW MALL",14.4,2.4,"#10232b","#f5c542");X.position.set(0,9.35,1.58),X.rotation.y=Math.PI,X.renderOrder=11,E.box(0,7.9,13.2,15.5,2.9,.4,"#10232b"),N.box(0,.6,13.26,26,3.4,.1,"#9fd3ea");let mt=b("OCW MALL",14.4,2.4,"#10232b","#f5c542");mt.position.set(0,9.35,13.42),mt.renderOrder=11;let st=[];for(let Wt=0;Wt<12;Wt++)st.push(-16.5+Wt*3);let bt=new Set;for(let Wt=0;Wt<5;Wt++){let St=Math.floor(C()*12);bt.has(St)||(bt.add(St),R(E,st[St],-3.4,-Math.PI/2,Fl[Math.floor(C()*Fl.length)]))}return J(-12,-9.5),J(12,-9.5),J(0,-9.5),{anim:Q,objs:[X,mt],spots:[[-6,-.2],[6,-.2],[-2,-.4],[2,-.4]],parking:st.map((Wt,St)=>bt.has(St)?null:[Wt,-3.4]).filter(Boolean),label:"the mall"}}if(S==="cafe"){F.quad(-x/2+.5,-13.5,x/2-.5,13.5,0,n.piazza),E.box(3,0,6.5,12,3.8,9,"#f3e2d2"),E.roof(3,3.8,6.5,12.8,9.8,2.2,"#5d80a7"),N.box(3,.6,1.96,8,2.2,.1,"#9fd3ea");for(let mt=0;mt<6;mt++)E.box(-2+mt*2+.5,2.9,1,2,.25,2.2,mt%2?"#ffffff":"#e8554e");for(let[mt,st,bt]of[[-6,-6,"#e8554e"],[-1,-9,"#58b368"],[4,-6,"#f2c94c"],[-6,2,"#4f8fd9"]]){E.cyl(mt,0,st,.5,.5,.75,8,"#ffffff"),E.cyl(mt,0,st,.05,.05,2.4,4,"#555555"),E.cyl(mt,2.2,st,1.7,.05,.55,8,bt);for(let[Wt,St]of[[-.9,0],[.9,0]])E.box(mt+Wt,0,st+St,.45,.45,.45,"#8a6440")}let X=b("CAF\xC9",5,1.2,"#10232b","#ffffff");return X.position.set(3,4.6,1.98),X.rotation.y=Math.PI,X.renderOrder=11,J(-9,-12),{anim:Q,objs:[X],spots:[[-6.9,-6],[-5.1,-6],[-1.9,-9],[-.1,-9],[3.1,-6],[4.9,-6],[-6.9,2]],label:"the caf\xE9"}}if(S==="playground"){F.quad(-x/2+.5,-13.5,x/2-.5,13.5,0,"#9fd77a"),F.quad(-8,-10,8,8,.01,"#e8d29a");for(let mt of[-6.5,-2.5])E.cyl(mt,0,-3,.12,.12,2.8,5,"#d9483b");E.box(-4.5,2.8,-3,4.4,.2,.2,"#d9483b");let X=[];for(let mt of[-5.4,-3.6]){let st=new t.Mesh(m(bt=>{bt.box(0,-2.2,0,.7,.1,.4,"#4f8fd9"),bt.box(-.32,-2.2,0,.03,2.2,.03,"#555555"),bt.box(.32,-2.2,0,.03,2.2,.03,"#555555")}),M.c);st.position.set(mt,2.8,-3),st.renderOrder=10,X.push(st)}Q.push(mt=>{X[0].rotation.x=.5*Math.sin(mt*2.2),X[1].rotation.x=.45*Math.sin(mt*2.2+1.7)}),E.box(4,0,-4,1.4,2.4,1.4,"#f2c94c"),E.add(new t.BoxGeometry(1.2,.15,4.2),"#4f8fd9",new t.Matrix4().makeRotationX(.55).setPosition(4,1.25,-1.6)),E.add(new t.BoxGeometry(.4,.15,4),"#58b368",new t.Matrix4().makeRotationX(.18).setPosition(-3,.5,4)),E.box(-3,0,4,.4,.45,.4,"#555555");for(let[mt,st]of[[-9,11],[9,11],[9,-12]])wt(E,mt,st,.8,0,C);return{anim:Q,objs:X,spots:[[-4.5,-1.2],[2,-6],[-1,6],[5,3]],label:"the playground"}}return{anim:Q,objs:[],spots:[],label:""}}let wt=s.tree;function ct(S,x,E,F,N,U){let C=S.side,O=S.x,J=S.y,Q=St=>-St,X=(St,ue,de,Te,ln,At)=>E.quad(Math.min(St,de),Q(Math.max(ue,Te)),Math.max(St,de),Q(Math.min(ue,Te)),ln,At);X(O-285,J+C*4,O+285,J+C*172,0,"#b9d98f"),U||X(Math.min(0,O),J-3.4,Math.max(0,O),J+3.4,.004,n.road),X(O-55,J+C*6,O+55,J+C*36,.006,"#9aa0a6");for(let St=0;St<=18;St++){let ue=O-54+St*6;X(ue-.1,J+C*8,ue+.1,J+C*14,.01,"#f4f4f0"),X(ue-.1,J+C*28,ue+.1,J+C*34,.01,"#f4f4f0")}X(O-125,J+C*62,O+125,J+C*112,.006,"#c9cdd1"),X(O-250,J+C*117,O+250,J+C*125,.008,"#8f959c"),X(O+60,J+C*110,O+70,J+C*125,.008,"#8f959c"),X(O-272,J+C*134,O+272,J+C*166,.01,"#5d6166");for(let St=O-240;St<O+240;St+=24)X(St,J+C*149.6,St+12,J+C*150.4,.012,"#ffffff");for(let St of[-1,1])for(let ue=0;ue<6;ue++){let de=O+St*262,Te=J+C*(138+ue*4.6);X(de-6,Te,de+6,Te+C*2.2,.012,"#ffffff")}X(O-272,J+C*134.6,O+272,J+C*135.2,.012,"#ffffff"),X(O-272,J+C*164.8,O+272,J+C*165.4,.012,"#ffffff");let mt=Q(J+C*51);x.box(O,0,mt,120,11,22,"#eef0f2"),x.box(O,11,mt,122,.8,24,"#c9cdd1"),F.box(O,1,mt+C*11.05,110,8,.12,"#9fd3ea"),x.box(O,0,Q(J+C*38),20,.4,5,"#c9553c"),x.box(O,11.8,Q(J+C*40.5),34,3.6,.6,"#10232b");for(let St=0;St<4;St++){let ue=O-45+St*30;x.box(ue,4,Q(J+C*68),3,3,12,"#d3d6da")}x.cyl(O-100,0,Q(J+C*52),3.4,3,28,10,"#e9eaec"),F.cyl(O-100,28,Q(J+C*52),4.6,4.6,4,10,"#9fd3ea"),x.cyl(O-100,32,Q(J+C*52),5,.4,2,10,"#5d6166"),x.box(O+100,0,Q(J+C*46),44,15,32,"#cfd3d8"),x.box(O+100,.2,Q(J+C*46)-C*16.05,36,12,.1,"#8f959c");for(let St of[O-50,O,O+50])x.cyl(St,0,Q(J+C*4),.12,.09,4.2,5,"#3d4a52"),F.box(St,4.1,Q(J+C*4),.6,.45,.6,"#ffe7a3"),N.push([St,Q(J+C*4)]);let st=b("OCW AIRPORT",32,3.2,"#10232b","#f5c542");st.position.set(O,13.6,Q(J+C*40.5)+(C>0?.32:-.32)),st.rotation.y=C>0?0:Math.PI,st.renderOrder=11;let bt=P();bt.position.set(O+40,0,Q(J+C*92)),bt.rotation.y=C>0?-Math.PI/2:Math.PI/2;let Wt=[];for(let St=0;St<18;St++){let ue=O-51+St*6;Wt.push([ue,Q(J+C*11),C>0?-Math.PI/2:Math.PI/2],[ue,Q(J+C*31),C>0?Math.PI/2:-Math.PI/2])}return{objs:[st,bt],parking:Wt,runwayZ:Q(J+C*150),x0:O-255,x1:O+255,gate:{x:O,z:Q(J+C*38)}}}let Ut=new Set,Bt=new Set,Vt=new Map;r.setEgg=S=>{Bt.clear();for(let x of S)Bt.add(String(x).toLowerCase())},r.setMayors=S=>{Vt.clear();for(let[x,E]of Object.entries(S))E&&Vt.set(x,String(E).toLowerCase())};let se={t:0,last:null};r.occupied=(S,x)=>{let E=[];if(x>=30)for(let F of S.civic||[])E.push([F.x-F.w/2-2,F.y-16,F.x+F.w/2+2,F.y+16]);if(S.airport){let F=S.airport,N=F.side;E.push([F.x-292,Math.min(F.y,F.y+N*178),F.x+292,Math.max(F.y,F.y+N*178)],[Math.min(0,F.x)-4,F.y-9,Math.max(0,F.x)+4,F.y+9])}return E};function fe(S,x,E,F){let N=new t.InstancedMesh(S,E,Math.max(1,x));return N.frustumCulled=!1,N.castShadow=!0,N.renderOrder=10,F&&(N.instanceColor=new t.InstancedBufferAttribute(new Float32Array(Math.max(1,x)*3).fill(1),3)),N}let pt=new t.Matrix4,Et=new t.Matrix4,Jt=new t.Matrix4,Ct=new t.Matrix4().makeScale(0,0,0),re=new t.Vector3,ee=new t.Color,oe=1.2;r.build=(S,x,E,F)=>{S.alive&&(S.grp.remove(S.alive.root),Ut.delete(S.alive)),S.alive=null;let N=S.v;if(!E||!N.lots.length)return;let U=new t.Group;S.grp.add(U);let C={V:S,v:N,root:U,n:E,lv:x.level,people:[],cars:[],vans:[],anim:[],spots:[],places:[],flags:[],crowns:[],parking:[],guests:[]},O=s.rand(s.hashStr(N.name+"#alive")),J=new e,Q=new e,X=new e,mt=F.slice(),st=x.streets.map(([At,ae,w,k])=>[At,-ae,w,-k]);N.airport&&N.stages&&st.push([0,-N.airport.y,N.airport.x,-N.airport.y]);let bt=[],Wt=N.lots.slice(0,E);for(let At of Wt){let ae=At.rot!=null?At.rot:At.face===1?0:Math.PI,w={L:At,rot:ae,co:Math.cos(ae),si:Math.sin(ae)};w.drive=ft(w,7.6,-17.8),w.walk=ft(w,0,-17.8),bt.push(w.drive,w.walk),C.people.push(w)}if(E>=30)for(let At of N.civic||[]){let ae=new e,w=new e,k=new e,Z=[],Y=it(At.type,At.w,ae,w,k,Z,s.rand(s.hashStr(N.name+At.type)),At.poly),W=At.rot!=null?At.rot:At.face===1?0:Math.PI,ht=Math.cos(W),xt=Math.sin(W),ut=new t.Group;ut.position.set(At.x,0,-At.y),ut.rotation.y=W,U.add(ut);let Pt=ae.geo(),Ht=w.geo(),jt=k.geo();if(Ht){let $t=new t.Mesh(Ht,M.flat);$t.renderOrder=6,$t.receiveShadow=!0,ut.add($t)}if(Pt){let $t=new t.Mesh(Pt,M.c);$t.castShadow=$t.receiveShadow=!0,$t.renderOrder=10,ut.add($t)}if(jt){let $t=new t.Mesh(jt,i);$t.renderOrder=10,ut.add($t)}for(let $t of Y.objs)ut.add($t);C.anim.push(...Y.anim);let Xt=([$t,pe])=>({x:At.x+$t*ht+pe*xt,z:-At.y-$t*xt+pe*ht});for(let $t of Z)mt.push([Xt($t).x,Xt($t).z]);let le=Xt([0,-17.8]);if(bt.push(le),C.places.push({type:At.type,label:Y.label,at:le,spots:Y.spots.map(Xt),tf:Xt}),Y.parking)for(let $t of Y.parking)C.parking.push({at:le,p:Xt($t),pre:Xt([$t[0],($t[1]-17.8)/2]),yaw:W+Math.PI/2,free:!0,place:At.type})}if(x.piazza&&x.level>=3&&x.v2){let At=s.piazzaC(x.piazza),ae=x.level>=4?-At[1]-8:-At[1],w={x:At[0],z:-At[1],maxd:120};bt.push(w),C.places.push({type:"piazza",label:x.level>=4?"the town hall":"the square",at:w,spots:[[-4.6,0],[4.6,0],[0,-4.8],[-3.4,-3.4],[3.4,3.2]].map(([k,Z])=>({x:At[0]+k,z:ae+Z}))})}else if(x.piazza&&x.level>=3){let At={x:0,z:0};bt.push(At),C.places.push({type:"piazza",label:x.level>=4?"the town hall":"the square",at:At,spots:[[-5,9],[5,9],[0,11],[-3,6.5],[3,6.5]].map(([ae,w])=>({x:ae,z:w}))})}if(N.airport){let At=new e,ae=new e,w=new e,k=[],Z=ct(N.airport,At,ae,w,k,!N.stages),Y=ae.geo(),W=At.geo(),ht=w.geo();if(Y){let ut=new t.Mesh(Y,M.flat);ut.renderOrder=6,ut.receiveShadow=!0,U.add(ut)}if(W){let ut=new t.Mesh(W,M.c);ut.castShadow=ut.receiveShadow=!0,ut.renderOrder=10,U.add(ut)}if(ht){let ut=new t.Mesh(ht,i);ut.renderOrder=10,U.add(ut)}for(let ut of Z.objs)U.add(ut);mt.push(...k);let xt={x:N.airport.x,z:-N.airport.y};bt.push(xt),C.airport={...Z,at:xt,planes:[P(),P()],queue:[],next:3,idle:4,code:100+Math.floor(O()*300),busy:0};for(let ut of C.airport.planes)ut.visible=!1,U.add(ut);for(let[ut,Pt,Ht]of Z.parking)C.parking.push({at:xt,p:{x:ut,z:Pt},yaw:Ht,free:!0,place:"airport"});C.places.push({type:"airport",label:"the airport",at:xt,spots:[]})}if(C.graph=et(st,bt),C.off=x.level>=3?1.5:.8,mt.length){let At=new Float32Array(mt.length*3);mt.forEach(([Z,Y],W)=>{At[W*3]=Z,At[W*3+1]=4.4,At[W*3+2]=Y});let ae=new t.BufferGeometry;ae.setAttribute("position",new t.BufferAttribute(At,3));let w=new t.PointsMaterial({map:_,size:11*N.k/1e3,transparent:!0,depthWrite:!1,blending:t.AdditiveBlending,opacity:.85*p,fog:!1});g.push(w);let k=new t.Points(ae,w);k.renderOrder=12,k.frustumCulled=!1,U.add(k),C.haloMat=w}let St=s.lawsOf(N).has("nocars");C.noCar=St;let ue=C.people.length,de=ue+4,Te=!St&&x.level>=3&&C.graph?Math.min(6,1+Math.floor(ue/25)):0;C.mTorso=fe(y.torso,de,M.p,!0),C.mHead=fe(y.head,de,M.p,!0),C.mLeg=fe(y.leg,de*2,M.p,!0),C.mCar=fe(y.carBody,ue,M.c,!0),C.mCarD=fe(y.carDet,ue,M.c,!1),U.add(C.mTorso,C.mHead,C.mLeg,C.mCar,C.mCarD),Te&&(C.mVan=fe(y.vanBody,Te,M.c,!0),C.mVanD=fe(y.vanDet,Te,M.c,!1),U.add(C.mVan,C.mVanD));let ln=Vt.get(N.name);C.people.forEach((At,ae)=>{let w=s.rand(s.hashStr(At.L.user+"#p"));Object.assign(At,{i:ae,user:At.L.user,r:w,x:0,z:0,yaw:0,vis:!0,state:"garden",t:0,path:null,ph:0,talkT:0,talkCD:0,txt:""}),At.shirt=Tm[Math.floor(w()*Tm.length)],At.pants=Rm[Math.floor(w()*Rm.length)],At.skin=Cm[Math.floor(w()*Cm.length)],Lt(C.mTorso,ae,At.shirt),Lt(C.mHead,ae,At.skin),Lt(C.mLeg,ae*2,At.pants),Lt(C.mLeg,ae*2+1,At.pants);let k=s.carSpot(At.user,x.level).garage,Z=ft(At,7.6,k?-5.8:-10.6),Y={i:ae,x:Z.x,z:Z.z,yaw:At.rot+Math.PI/2,vis:!k&&!St,home:Z,garage:k,path:null,owner:At,color:Fl[Math.floor(w()*Fl.length)]};Lt(C.mCar,ae,Y.color),At.car=Y,C.cars.push(Y);let W=Dt(At);At.x=W.x,At.z=W.z,At.yaw=w()*6.28,w()<.3?(At.state="in",At.vis=!1,At.t=3+w()*25):At.t=w()*6,Bt.has(At.user.toLowerCase())&&C.flags.push(Ot(C,At)),ln&&ln===At.user.toLowerCase()&&C.crowns.push(Tt(C,At,x.level))});for(let At=0;At<Te;At++){let ae=C.graph.nodes[Math.floor(O()*C.graph.nodes.length)],w={i:At,x:ae.x,z:ae.z,yaw:0,vis:!0,node:ae,path:null,color:Pm[At%Pm.length]};Lt(C.mVan,At,w.color),C.vans.push(w)}for(let At=ue;At<de;At++)C.mTorso.setMatrixAt(At,Ct),C.mHead.setMatrixAt(At,Ct),C.mLeg.setMatrixAt(At*2,Ct),C.mLeg.setMatrixAt(At*2+1,Ct);C.bubbles=[];for(let At=0;At<6;At++){let ae=new t.Sprite(new t.SpriteMaterial({depthTest:!1,transparent:!0}));ae.visible=!1,ae.renderOrder=20,ae.center.set(.5,0),U.add(ae),C.bubbles.push(ae)}zt(C),S.alive=C,Ut.add(C)};function Lt(S,x,E){ee.set(E),S.instanceColor.setXYZ(x,ee.r,ee.g,ee.b),S.instanceColor.needsUpdate=!0}function ft(S,x,E){return{x:S.L.x+x*S.co+E*S.si,z:-S.L.y-x*S.si+E*S.co}}let D=[[-7,-11.5],[-6,-1],[-7,6],[0,8.5],[5,9.5],[-2.5,-11.8],[3,-11.8],[-8.5,2],[1.5,4],[-3,10.5]];function Dt(S){let[x,E]=D[Math.floor(S.r()*D.length)];return ft(S,x+(S.r()-.5)*1.5,E+(S.r()-.5)*1.5)}function Ot(S,x){let E=ft(x,-3.4,-11.2),F=new t.Mesh(new t.CylinderGeometry(.08,.1,8.5,6).translate(0,4.25,0),new t.MeshLambertMaterial({color:"#d9d9d9"}));F.position.set(E.x,0,E.z),F.castShadow=!0;let N=new t.PlaneGeometry(3.4,2.1,10,4);N.translate(1.7,0,0);let U=new t.Mesh(N,new t.MeshLambertMaterial({map:T,side:t.DoubleSide}));U.position.set(E.x+.05,7.3,E.z),U.rotation.y=x.rot+.35,U.castShadow=!0;let C=new t.Mesh(new t.SphereGeometry(.22,8,6),M.gold);return C.position.set(E.x,8.6,E.z),F.renderOrder=U.renderOrder=C.renderOrder=10,S.root.add(F,U,C),{geo:N,base:Float32Array.from(N.attributes.position.array)}}function Tt(S,x,E){let F=new e;F.cyl(0,0,0,1.1,1.1,.7,12,"#f5c542");for(let C=0;C<5;C++){let O=C/5*Math.PI*2;F.cyl(Math.cos(O)*.95,.7,Math.sin(O)*.95,.28,0,.75,4,"#f5c542")}let N=new t.Mesh(F.geo(),M.gold),U=ft(x,0,-5);return N.position.set(U.x,(E>=5?9:6.3)+2.2,U.z),N.castShadow=!0,N.renderOrder=10,S.root.add(N),N}function zt(S){for(let x of S.people.concat(S.guests))Qt(S,x);for(let x of S.cars)qt(S.mCar,S.mCarD,x);for(let x of S.vans)qt(S.mVan,S.mVanD,x);for(let x of[S.mTorso,S.mHead,S.mLeg,S.mCar,S.mCarD,S.mVan,S.mVanD])x&&(x.instanceMatrix.needsUpdate=!0)}function Qt(S,x){let E=x.i;if(!x.vis){S.mTorso.setMatrixAt(E,Ct),S.mHead.setMatrixAt(E,Ct),S.mLeg.setMatrixAt(E*2,Ct),S.mLeg.setMatrixAt(E*2+1,Ct);return}pt.makeRotationY(x.yaw).scale(re.set(oe,oe,oe)).setPosition(x.x,.02+(x.bob||0),x.z),S.mTorso.setMatrixAt(E,pt),S.mHead.setMatrixAt(E,pt);let F=Math.sin(x.ph)*.55*(x.moving?1:0);for(let N of[-1,1])Et.makeRotationX(F*N).setPosition(.12*N,.84,0),Jt.multiplyMatrices(pt,Et),S.mLeg.setMatrixAt(E*2+(N>0?1:0),Jt)}function qt(S,x,E){if(!E.vis){S.setMatrixAt(E.i,Ct),x.setMatrixAt(E.i,Ct);return}pt.makeRotationY(E.yaw).setPosition(E.x,.02,E.z),S.setMatrixAt(E.i,pt),x.setMatrixAt(E.i,pt)}let I=(S,x)=>x[Math.floor(S()*x.length)];function A(S,x,E){let F=E*x;for(;F>0&&S.path&&S.path.length;){let N=S.path[0],U=N.x-S.x,C=N.z-S.z,O=Math.hypot(U,C);if(O<.001){S.path.shift();continue}let J=Math.min(O,F);S.x+=U/O*J,S.z+=C/O*J,F-=J,S.tyaw=S.isCar?Math.atan2(-C,U):Math.atan2(U,C),J>=O&&S.path.shift()}if(S.tyaw!==void 0){let N=S.tyaw-S.yaw;N=Math.atan2(Math.sin(N),Math.cos(N)),S.yaw+=N*Math.min(1,x*(S.isCar?6:9))}return!S.path||!S.path.length}function K(S,x){let E=x.r,F=(O,J)=>Math.hypot(O.x-x.walk.x,O.z-x.walk.z)<J,N=S.places.filter(O=>O.spots.length&&O.at.node&&F(O.at,230));if(N.length&&E()<.7){let O=I(E,N),J=I(E,O.spots);return{node:O.at.node,end:[J],label:O.label}}let U=S.graph.nodes.filter(O=>F(O,140));return{node:I(E,U.length?U:S.graph.nodes),end:[],label:"a walk around "+S.v.name}}function _t(S,x,E){let F=nt(S.graph,x.walk.node,E.node);return F?[ft(x,0,-12),ft(x,0,-14.3),...yt(F,3),...E.end.map(U=>({x:U.x+(x.r()-.5)*.8,z:U.z+(x.r()-.5)*.8}))]:null}function Mt(S,x){let E=x.r,F=S.graph&&x.walk.node,N=!S.noCar&&S.graph&&x.drive.node,U=[["in",2],["garden",3],["stroll",F?3:0],["drive",N?1.4:0],["fly",N&&S.airport?.7:0]],C=U.reduce((Q,X)=>Q+X[1],0),O=E()*C,J="garden";for(let[Q,X]of U)if((O-=X)<0){J=Q;break}if(x.forceTrip&&N&&S.airport&&(J="fly",x.forceTrip=!1),J==="in")x.path=[ft(x,0,-9.2)],x.state="goIn",x.txt="Going home \u{1F3E0}";else if(J==="garden")x.path=[Dt(x)],x.state="garden",x.t=2+E()*5,x.txt="In the garden \u{1F337}",x.gn=1+Math.floor(E()*3);else if(J==="stroll"){let Q=K(S,x),X=_t(S,x,Q);if(!X){x.state="garden",x.path=[Dt(x)],x.t=3;return}x.state="stroll",x.path=X,x.back=X.slice(0,-1).reverse().concat([Dt(x)]),x.txt=Q.label.startsWith("a walk")?"Going for "+Q.label:"Walking to "+Q.label,x.dest=Q.label}else{let Q=null;if(J==="fly")Q=S.places.find(X=>X.type==="airport");else{let X=S.places.filter(mt=>mt.type==="mall"||mt.type==="cafe");X.length&&E()<.6&&(Q=I(E,X))}x.trip={kind:J==="fly"?"fly":Q?"shop":"tour",place:Q},x.state="toCar",x.path=[ft(x,4.6,-9.6),ft(x,5.6,x.car.garage?-9.4:-10.6)],x.txt=J==="fly"?"Going to the airport \u2708\uFE0F":Q?"Taking the car to "+Q.label+" \u{1F697}":"Taking the car \u{1F697}"}}function gt(S,x,E,F,N){let U=nt(S.graph,E,F);return U?[...yt(U,S.off),...N]:null}function Kt(S,x){let E=x.car,F=x.trip,N=x.r;E.vis=!0,E.isCar=!0,x.vis=!1;let U=[ft(x,7.6,-14.6)],C=null;if(F.place&&F.place.at.node){let O=S.parking.find(J=>J.free&&J.at===F.place.at);O?(O.free=!1,F.spot=O,C=gt(S,E,x.drive.node,F.place.at.node,[O.pre||{x:O.p.x,z:(O.p.z+F.place.at.z)/2},O.p])):F.place.type!=="airport"&&(C=gt(S,E,x.drive.node,F.place.at.node,[]))}if(!C){F.kind==="fly"&&(F.kind="tour");let O=ot(S.graph,x.drive.node,4+Math.floor(N()*7),N);F.end=O[O.length-1],C=yt(O,S.off),F.place=null}E.path=[...U,...C],x.state="driving",x.txt=F.kind==="fly"?"Driving to the airport \u2708\uFE0F":F.place?"Driving to "+F.place.label+" \u{1F697}":"Driving around "+S.v.name+" \u{1F697}"}function Ft(S,x){let E=x.car,F=x.trip,N=F.place?F.place.at.node:F.end,U=F.spot?[F.spot.pre||{x:F.spot.p.x,z:(F.spot.p.z+F.place.at.z)/2}]:[];F.spot&&(F.spot.free=!0,F.spot=null);let C=gt(S,E,N,x.drive.node,[ft(x,7.6,-14.6),ft(x,7.6,E.garage?-5.8:-10.6)]);E.path=C?[...U,...C]:[E.home],x.state="driveHome",x.txt="Driving home \u{1F3E0}"}function V(S){if(S._dest)return S._dest;let x=s.villages.filter(E=>E!==S.V&&E.v.n>=3&&!E.v.ghost);return S._dest=x.length?x:s.villages.filter(E=>E!==S.V)}function dt(S,x,E){if(x.talkT>0){x.talkT-=E,x.moving=!1,x.talkT<=0&&(x.talkCD=50+Math.random()*40,x.txt0&&x.txt.startsWith("Chatting")&&(x.txt=x.txt0));return}x.talkCD>0&&(x.talkCD-=E);let F=x.r;switch(x.state){case"in":if(x.vis=!1,x.t-=E,x.txt="At home \u{1F3E0}",x.t<=0){let N=ft(x,0,-9.2);x.x=N.x,x.z=N.z,x.vis=!0,Mt(S,x),x.state==="goIn"&&(x.state="garden",x.path=[Dt(x)],x.t=4,x.txt="In the garden \u{1F337}")}break;case"goIn":A(x,E,1.4)&&(x.state="in",x.t=6+F()*30,x.vis=!1);break;case"garden":A(x,E,1.2)&&(x.t-=E,x.t<=0&&(--x.gn>0?(x.path=[Dt(x)],x.t=2+F()*5):Mt(S,x)));break;case"stroll":A(x,E,1.7)&&(x.state="linger",x.t=5+F()*12,x.txt=x.dest.startsWith("a walk")?"Out for a walk":"Hanging out at "+x.dest);break;case"linger":x.t-=E,x.t<=0&&(x.state="back",x.path=x.back,x.txt="Walking home \u{1F3E0}");break;case"back":A(x,E,1.7)&&(x.state="garden",x.t=2+F()*4,x.gn=1,x.txt="In the garden \u{1F337}");break;case"toCar":A(x,E,1.5)&&Kt(S,x);break;case"driving":{let N=x.car;if(x.x=N.x,x.z=N.z,A(N,E,x.trip.kind==="fly"?17:12))if(x.trip.kind==="fly"){x.state="checkin";let U=S.airport.gate;x.vis=!0,x.path=[{x:U.x+(F()-.5)*8,z:U.z}],x.txt="Checking in at the airport \u{1F9F3}"}else if(x.trip.place){if(x.state="shop",x.t=10+F()*20,x.txt=x.trip.place.type==="mall"?"Shopping at the mall \u{1F6CD}\uFE0F":"Having a coffee \u2615",x.trip.place.spots.length){let U=N;x.vis=!0,x.x=U.x,x.z=U.z,x.path=[I(F,x.trip.place.spots)]}}else x.state="park",x.t=1+F()*2;break}case"shop":A(x,E,1.3),x.t-=E,x.t<=0&&(x.vis?(x.path=[{x:x.car.x,z:x.car.z}],x.state="toCar2"):Ft(S,x));break;case"toCar2":A(x,E,1.5)&&(x.vis=!1,Ft(S,x));break;case"park":x.t-=E,x.t<=0&&Ft(S,x);break;case"driveHome":{let N=x.car;if(x.x=N.x,x.z=N.z,A(N,E,12)){N.vis=!N.garage;let U=ft(x,5.6,N.garage?-9.4:-10.6);x.x=U.x,x.z=U.z,x.vis=!0,x.state="goIn",x.path=[ft(x,4.6,-9.6),ft(x,0,-9.2)],x.txt="Back home \u{1F3E0}"}break}case"checkin":if(A(x,E,2.2)){if(x.vis=!1,x.state="gate",S.airport.queue.push(x),!x.fl){let N=I(F,V(S));x.fl={dest:N}}x.txt="Waiting to board, flight to "+x.fl.dest.v.name+" \u2708\uFE0F"}break}x.vis&&x.state!=="driving"&&x.state!=="driveHome"?x.moving=!!(x.path&&x.path.length):x.moving=!1,x.moving&&(x.ph+=E*9)}function G(S,x,E){if(x.isCar=!0,!x.path||!x.path.length){let F=ot(S.graph,x.node,3+Math.floor(Math.random()*5),Math.random);x.node=F[F.length-1],x.path=yt(F,S.off),F.length<2&&(x.path=null)}A(x,E,7.5)}let j=24,lt=10,tt=12;function $(S,x){let E=S.airport,F=se.t;for(let U of E.planes){let C=U.userData.f;if(!C){U.visible=!1;continue}let O=F-C.t0,J=C.dir,Q=J>0?E.x0:E.x1,X=E.x1-E.x0,mt,st,bt=0,Wt=1;if(C.dep){if(O<lt){let St=O/lt;mt=Q+J*X*.62*St*St,st=0}else{let St=O-lt;mt=Q+J*(X*.62+75*St),st=Math.min(420,2.2*St*St+6*St),bt=.16,Wt=St>tt-3?Math.max(0,(tt-St)/3):1}if(O>lt+tt){U.userData.f=null,U.visible=!1;continue}}else{let ue=Math.min(1,O/16);if(O<8){let de=8-O;mt=Q+J*(X*.15-70*de),st=1.6*de*de+3*de,bt=-.05,Wt=de>5?(8-de)/3:1}else{let de=(O-8)/8;mt=Q+J*(X*.15+X*.65*(1-(1-de)*(1-de))),st=0}if(ue>=1){U.userData.f=null,U.visible=!1;for(let de of C.pax)It(S,de);continue}}U.visible=!0,U.position.set(mt,st,E.runwayZ),U.rotation.set(0,J>0?0:Math.PI,bt,"YXZ"),U.scale.setScalar(Math.max(.001,Wt));for(let St of C.pax)St.x=mt,St.z=E.runwayZ,St.alt=st}let N=E.planes.find(U=>!U.userData.f);if(N&&F>=E.next){let U=S.people.filter(C=>C.state==="inbound"&&F>=C.fl.back);if(U.length){let C="OCW "+E.code++;for(let O of U)O.state="landing",O.fl.code=C,O.txt="Landing in "+S.v.name+" \u{1F6EC} "+C;N.userData.f={dep:!1,t0:F,dir:Math.random()<.5?1:-1,pax:U},E.next=F+14}else if(E.queue.length||F>=E.idle){let C=E.queue.length?E.queue[0].fl.dest:I(Math.random,V(S)),O=E.queue.filter(Q=>Q.fl.dest===C);E.queue=E.queue.filter(Q=>Q.fl.dest!==C);let J="OCW "+E.code++;for(let Q of O)Q.state="plane",Q.fl.code=J,Q.fl.t0=F,Q.txt="Taking off to "+C.v.name+" \u2708\uFE0F "+J;N.userData.f={dep:!0,t0:F,dir:Math.random()<.5?1:-1,pax:O,dest:C,code:J},E.next=F+16,E.idle=F+40+Math.random()*30,E.board={code:J,dest:C.v.name,t:F}}}for(let U of S.people)U.state==="plane"&&F-U.fl.t0>lt+tt-.5?(U.state="cruise",U.fl.c0=F,U.txt="Flying to "+U.fl.dest.v.name+" \u2708\uFE0F "+U.fl.code):U.state==="cruise"&&F-U.fl.c0>j?(U.state="abroad",U.fl.until=F+35+U.r()*40,U.txt="Visiting "+U.fl.dest.v.name+" \u{1F4F8}"):U.state==="abroad"&&F>U.fl.until?(U.state="cruiseBack",U.fl.c0=F,U.txt="Flying home to "+S.v.name+" \u2708\uFE0F"):U.state==="cruiseBack"&&F-U.fl.c0>j&&(U.state="inbound",U.fl.back=F,U.txt="Landing soon in "+S.v.name+" \u{1F6EC}")}function It(S,x){let E=S.airport.gate;x.x=E.x,x.z=E.z,x.vis=!0,x.alt=0,x.fl=null;let F=x.trip&&x.trip.spot;x.state="shop",x.t=.1,x.path=F?[{x:F.p.x,z:F.p.z}]:[],x.txt="Back from the trip, walking to the car \u{1F697}",x.state="toCar2",x.path.length||(x.vis=!1,Ft(S,x))}function Nt(S){let x=[];for(let E of Ut)if(E.airport)for(let F of E.people)F.state==="abroad"&&F.fl.dest===S.V&&x.push(F);S.guests=S.guests.filter(E=>{let F=x.includes(E.of);return F||(S.mTorso.setMatrixAt(E.i,Ct),S.mHead.setMatrixAt(E.i,Ct),S.mLeg.setMatrixAt(E.i*2,Ct),S.mLeg.setMatrixAt(E.i*2+1,Ct),E.of.guest=null),F});for(let E of x)if(!S.guests.some(F=>F.of===E)&&S.guests.length<4){let F=S.people.length+[0,1,2,3].find(C=>!S.guests.some(O=>O.i===S.people.length+C)),N=S.people[Math.floor(E.r()*S.people.length)],U={i:F,of:E,r:E.r,x:N.walk.x,z:N.walk.z+3,yaw:0,vis:!0,path:[],ph:0,guest:!0,t:0};Lt(S.mTorso,F,E.shirt),Lt(S.mHead,F,E.skin),Lt(S.mLeg,F*2,E.pants),Lt(S.mLeg,F*2+1,E.pants),S.guests.push(U),E.guest={S,g:U}}for(let E of S.guests)if((!E.path||!E.path.length)&&(E.t-=1/30)<=0){let F=S.places.filter(U=>U.spots.length),N=F.length&&E.r()<.6?I(E.r,I(E.r,F).spots):null;if(N)E.path=[N];else{let U=I(E.r,S.people);E.path=[{x:U.walk.x+(E.r()-.5)*30,z:U.walk.z+(U.walk.z>-U.L.y?-3:3)}]}E.t=3}}function ie(S){let x=S.people.filter(E=>E.vis&&E.talkT<=0&&E.talkCD<=0&&Math.random()<.5&&(E.state==="linger"||E.state==="stroll"||E.state==="back"||E.state==="garden"));for(let E=0;E<x.length;E++)for(let F=E+1;F<x.length;F++){let N=x[E],U=x[F];if(N.talkT>0||U.talkT>0||N.with===U)continue;let C=Math.hypot(N.x-U.x,N.z-U.z);if(C>2.6||C<.3||N.state==="garden"&&U.state==="garden"&&N.L!==U.L&&C>1.6)continue;let O=4+Math.random()*4;N.talkT=U.talkT=O,N.with=U,U.with=N,N.yaw=Math.atan2(U.x-N.x,U.z-N.z),U.yaw=N.yaw+Math.PI,N.tyaw=N.yaw,U.tyaw=U.yaw,N.txt0=N.txt,U.txt0=U.txt,N.txt="Chatting with "+U.user+" \u{1F4AC}",U.txt="Chatting with "+N.user+" \u{1F4AC}";let J=S.bubbles.find(Q=>!Q.userData.on);J&&(J.userData={on:!0,a:N,b:U,t0:se.t,T:O,w:[I(Math.random,Im),I(Math.random,Im)]})}}function H(S){let x=s.view.h*1e3/S.v.k;for(let E of S.bubbles){let F=E.userData;if(!F.on){E.visible=!1;continue}let N=se.t-F.t0;if(N>F.T){F.on=!1,E.visible=!1;for(let Q of[F.a,F.b])Q.txt0&&Q.txt.startsWith("Chatting")&&(Q.txt=Q.txt0);continue}let U=Math.floor(N/1.8)%2?F.b:F.a,C=F.w[Math.floor(N/1.8)%2],O=rt(C);E.material.map!==O&&(E.material.map=O,E.material.needsUpdate=!0);let J=Math.max(1.6,x*.045);E.scale.set(J*O._asp,J,1),E.position.set(U.x,2.5*oe,U.z),E.visible=!0}}let Rt=null,q=null;r.step=S=>{se.last===null&&(se.last=S);let x=Math.min(.1,Math.max(0,S-se.last));se.last=S,se.t+=x;let E=s.view.h,F=null,N=1/0;for(let O of Ut){if(!O.V.grp.visible)continue;let J=O.v.cx-s.view.x,Q=O.v.cy-s.view.y,X=Math.hypot(J,Q);E/O.v.k<1.4&&X<E*1.2+.3*O.v.k&&X<N&&(N=X,F=O)}Rt=F;let U=new Set;if(Rt&&U.add(Rt),q&&q.S&&Ut.has(q.S)){U.add(q.S);let O=q.p.guest&&q.p.guest.S;O&&Ut.has(O)&&U.add(O)}let C=!1;for(let O of U){for(let J of O.people)dt(O,J,x);if(O.graph)for(let J of O.vans)G(O,J,x);O.airport&&$(O,x),Nt(O);for(let J of O.guests)J.moving=!A(J,x,1.3),J.moving&&(J.ph+=x*9);O._tk=(O._tk||0)+x,O._tk>.25&&(O._tk=0,ie(O)),H(O);for(let J of O.anim)J(se.t);for(let J of O.crowns)J.rotation.y=se.t*.8;zt(O),C=!0}for(let O of Ut)if(O.flags.length&&O.V.grp.visible&&E/O.v.k<3){for(let J of O.flags){let Q=J.geo.attributes.position,X=J.base;for(let mt=0;mt<Q.count;mt++){let st=X[mt*3],bt=X[mt*3+1];Q.setZ(mt,Math.sin(st*1.9-se.t*5.5+bt*.6)*.32*(st/3.4))}Q.needsUpdate=!0,J.geo.computeVertexNormals()}if(!U.has(O))for(let J of O.crowns)J.rotation.y=se.t*.8;C=!0}return C};let at=(S,x,E)=>({x:S.v.cx+x*S.v.k/1e3,y:S.v.cy-E*S.v.k/1e3});return r.has=S=>!!(S&&S.alive),r.follow=(S,x)=>{if(!S||!S.alive)return q=null,!1;let E=S.alive.people.find(F=>F.user.toLowerCase()===String(x).toLowerCase());return E?(q={S:S.alive,p:E},E.state==="in"&&(E.t=Math.min(E.t,1.5)),S.alive.airport&&!E.fl&&E.state!=="driving"&&(E.forceTrip=!0),!0):(q=null,!1)},r.unfollow=()=>{q=null},r.where=()=>{if(!q)return null;let{S,p:x}=q;if(!Ut.has(S))return null;let E={user:x.user,city:S.v.name,txt:x.txt||"In the garden \u{1F337}",state:x.state};if(x.state==="cruise"||x.state==="cruiseBack"){let U=at(S,S.airport.at.x,S.airport.runwayZ),C=x.fl.dest.v,O={x:U.x,y:U.y,h:1.4},J={x:C.cx,y:C.cy,h:1.4},Q=x.state==="cruise"?s.flight(O,J):s.flight(J,O),X=Math.min(1,(se.t-x.fl.c0)/j),mt=X<.5?2*X*X:1-Math.pow(-2*X+2,2)/2,st=Q.at(mt*Q.S);return{...E,x:st.x,y:st.y,h:st.h,mode:"plane",dest:x.state==="cruise"?C.name:S.v.name}}if(x.state==="abroad"){let U=x.guest;if(U&&Ut.has(U.S)){let C=at(U.S,U.g.x,U.g.z);return{...E,...C,mode:"walk",away:U.S.v.name}}return{...E,x:x.fl.dest.v.cx,y:x.fl.dest.v.cy,mode:"away",away:x.fl.dest.v.name,k:x.fl.dest.v.k}}if(x.state==="gate"||x.state==="inbound"){let U=at(S,S.airport.gate.x,S.airport.gate.z);return{...E,...U,mode:"walk"}}let F=x.state==="driving"||x.state==="driveHome"?x.car:x,N=at(S,F.x,F.z);return{...E,...N,alt:(x.alt||0)*S.v.k/1e3,mode:F===x.car?"car":x.state==="plane"||x.state==="landing"?"plane":"walk",k:S.v.k}},r.board=S=>S&&S.alive&&S.alive.airport&&S.alive.airport.board||null,r.isFollowing=()=>!!q,r}var Cs=6371.0088;function Fo(s,t){return s=Math.max(-85,Math.min(85,s)),{x:Cs*t*Math.PI/180,y:Cs*Math.log(Math.tan(Math.PI/4+s*Math.PI/360))}}function Tf(s,t){return{lon:s/Cs*180/Math.PI,lat:(2*Math.atan(Math.exp(t/Cs))-Math.PI/2)*180/Math.PI}}var Zt={sea:"#6ccbe9",seaDeep:"#58bde0",halo:"#a9e6f6",coast:"#f3e6bd",border:"#ffffff",grass:"#93d16c",grass2:"#7fc35d",forest:"#62a94c",tundra:"#b8c99a",desert:"#efdba3",desert2:"#e3c587",snow:"#f4f8f9",lawn:"#a3d97c",lane:"#d3bb8c",road:"#8f959c",curb:"#d7d3ca",piazza:"#e2d8c6",gravel:"#ddd0b0",fence:"#a07246",fenceDark:"#7a5433",trunk:"#7d5636",leaf:["#4f9e3e","#5daf45","#73bd4f","#3f8a3a"],walls:["#f6eddc","#f0e3c9","#f8f4ec","#ecdcc2","#f3e2d2","#e9e4d8"],roofs:["#c9553c","#b7493a","#d9764b","#5d80a7","#6f8d5b","#8b5b45","#a9493d","#4f6b8c"],fields:["#dccb6d","#b2cf63","#93bb55","#cfae72"],sun:"#ffcf3f",win:"#3f6474",door:"#6e4429",stone:"#c2bbad"};async function YM(s){let t=new DecompressionStream("gzip"),e=await new Response(new Blob([s]).stream().pipeThrough(t)).arrayBuffer();return new DataView(e)}async function ZM(s){let t=Uint8Array.from(atob(s),i=>i.charCodeAt(0)),e=new DecompressionStream("gzip"),n=await new Response(new Blob([t]).stream().pipeThrough(e)).arrayBuffer();return new DataView(n)}function Um(s){let t=s.getUint8(3)===50,e=4,n=s.getUint32(e,!0);e+=4;let i=[];for(let r=0;r<n;r++){let o=s.getUint8(e),a=s.getUint8(e+1),c=s.getUint32(e+2,!0);e+=6;let l=[];for(let h=0;h<c;h++){let u=s.getFloat64(e,!0),f=s.getFloat64(e+8,!0),d=s.getFloat32(e+16,!0),p=s.getUint32(e+20,!0);e+=24;let _=[];for(let g=0;g<p;g++){let m=s.getUint16(e,!0);e+=2;let y=[];for(let v=0;v<m;v++){let M=s.getUint32(e,!0);e+=4;let B=new Int16Array(M*2),R=0,P=0;for(let z=0;z<M;z++)R=R+s.getUint16(e,!0)<<16>>16,P=P+s.getUint16(e+2,!0)<<16>>16,e+=4,B[z*2]=R,B[z*2+1]=P;y.push(B)}if(t&&o===0){let v=s.getUint32(e,!0);e+=4;let M=0;for(let R of y)M+=R.length/2;let B=new Uint32Array(v);if(M<65536){let R=0;for(let P=0;P<v;P++)R=R+s.getUint16(e,!0)&65535,e+=2,B[P]=R}else for(let R=0;R<v;R++)B[R]=s.getUint32(e,!0),e+=4;y.idx=B}_.push(y)}l.push({cx:u,cy:f,half:d,items:_})}i.push({kind:o,lod:a,cells:l})}return i}var Af=[[8,23,27,9],[45,22,13,8],[60,30,9,5],[71,27,5,3],[88,40,16,4],[103,42,12,4],[131,-25,14,7],[-112,32,9,5],[-104,28,5,4],[-69,-23,3,7],[19,-24,7,5],[-67,-40,4,6],[57,41,9,4]];function Ts(s){return new Gt(s)}function JM(){let s=new Oi({color:16777215,side:bn}),t={uGrass:{value:Ts(Zt.grass)},uGrass2:{value:Ts(Zt.grass2)},uForest:{value:Ts(Zt.forest)},uTundra:{value:Ts(Zt.tundra)},uDesert:{value:Ts(Zt.desert)},uDesert2:{value:Ts(Zt.desert2)},uSnow:{value:Ts(Zt.snow)},uDes:{value:Af.map(e=>new ve(...e))}};return s.onBeforeCompile=e=>{Object.assign(e.uniforms,t),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vW; varying vec2 vL;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vL = position.xz;`),e.vertexShader=e.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vW = (modelMatrix*vec4(transformed,1.0)).xyz + uOrigin;`),e.vertexShader=`uniform vec3 uOrigin;
`+e.vertexShader,e.uniforms.uOrigin=Fm,e.fragmentShader=`uniform vec3 uGrass,uGrass2,uForest,uTundra,uDesert,uDesert2,uSnow; uniform vec4 uDes[${Af.length}];
varying vec3 vW; varying vec2 vL;
float h21(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
float fb(vec2 p){ return vn(p)*0.55+vn(p*2.1)*0.3+vn(p*4.3)*0.15; }
`+e.fragmentShader.replace("vec4 diffuseColor = vec4( diffuse, opacity );",`
  float lon = vW.x/${Cs.toFixed(4)}*57.29578;
  float lat = (2.0*atan(exp(-vW.z/${Cs.toFixed(4)}))-1.5707963)*57.29578;
  vec2 ll = vec2(lon,lat);
  vec2 mw = vec2(vW.x, -vW.z); float n1 = fb(mw/620.0), n2 = fb(mw/130.0);
  vec3 c = mix(uGrass, uGrass2, smoothstep(0.35,0.75,n1));
  c = mix(c, uForest, smoothstep(0.66,0.9,n2)*0.3);
  float des = 0.0;
  for(int i=0;i<${Af.length};i++){ vec4 e=uDes[i]; float d=length((ll-e.xy)/e.zw); des=max(des, smoothstep(1.05,0.55,d+(n2-0.5)*0.5)); }
  c = mix(c, mix(uDesert,uDesert2,smoothstep(0.3,0.8,n1)), des);
  float tun = smoothstep(56.0,64.0,lat+(n1-0.5)*6.0);
  c = mix(c, uTundra, tun*0.85);
  float gl = smoothstep(1.0,0.7,length((ll-vec2(-41.0,74.0))/vec2(21.0,11.0)));
  float sn = max(smoothstep(70.0,76.0,lat+(n2-0.5)*5.0), gl);
  c = mix(c, uSnow, sn);
  // dettaglio vicino: macchie d'erba a 40 m e 300 m (coordinate locali della cella, precise)
  float d1 = vn(vL*22.0), d2 = vn(vL*3.1);
  c *= 0.965 + 0.05*d1 + 0.03*d2;
  vec4 diffuseColor = vec4( c, opacity );`)},s}var Fm={value:new L},Pe=class{constructor(){this.parts=[]}add(t,e,n){t=t.index?t.toNonIndexed():t,n&&t.applyMatrix4(n),t.deleteAttribute("uv");let i=new Gt(e),r=t.attributes.position.count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=i.r,o[a*3+1]=i.g,o[a*3+2]=i.b;return t.setAttribute("color",new Me(o,3)),t.attributes.normal||t.computeVertexNormals(),this.parts.push(t),this}box(t,e,n,i,r,o,a,c=0){let l=new ne().makeRotationY(c).setPosition(t,e+r/2,n);return this.add(new xi(i,r,o),a,l)}quad(t,e,n,i,r,o){let a=new Jn(n-t,i-e);return a.rotateX(-Math.PI/2),a.translate((t+n)/2,r,(e+i)/2),this.add(a,o)}quadR(t,e,n,i,r,o,a){let c=new Jn(n,i);return c.rotateX(-Math.PI/2),c.rotateY(r),c.translate(t,o,e),this.add(c,a)}roof(t,e,n,i,r,o,a,c=0){let l=i/2,h=r/2,u=[[-l,0,-h],[l,0,-h],[l,o,0],[-l,0,-h],[l,o,0],[-l,o,0],[l,0,h],[-l,0,h],[-l,o,0],[l,0,h],[-l,o,0],[l,o,0],[-l,0,h],[-l,0,-h],[-l,o,0],[l,0,-h],[l,0,h],[l,o,0]];for(let p=0;p<u.length;p+=3)[u[p+1],u[p+2]]=[u[p+2],u[p+1]];let f=new he;f.setAttribute("position",new Yt(u.flat(),3)),f.computeVertexNormals();let d=new ne().makeRotationY(c).setPosition(t,e,n);return this.add(f,a,d)}cyl(t,e,n,i,r,o,a,c){let l=new Ui(r,i,o,a);return l.translate(t,e+o/2,n),this.add(l,c)}ico(t,e,n,i,r,o=1){let a=new ur(i,0);return a.scale(1,o,1),a.translate(t,e,n),this.add(a,r)}geo(){if(!this.parts.length)return null;let t=Ef(this.parts,!1);return this.parts=[],t}};function ki(s){let t=2166136261;for(let e=0;e<s.length;e++)t^=s.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function zi(s){return()=>{s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Vn=22,vn=28;function Rs(s,t,e,n,i,r){let o=Zt.leaf[Math.floor(r()*Zt.leaf.length)];if(i===1)s.cyl(t,0,e,.32*n,.22*n,2.2*n,5,Zt.trunk),s.cyl(t,1.6*n,e,2.6*n,0,4.2*n,6,o),s.cyl(t,3.6*n,e,1.9*n,0,3.6*n,6,o);else if(i===2)s.ico(t,1*n,e,1.5*n,o,.75);else{s.cyl(t,0,e,.38*n,.26*n,3*n,5,Zt.trunk),s.ico(t,4.6*n,e,2.6*n,o,.95);let a=new Gt(o).multiplyScalar(1.12);s.ico(t+1.3*n,4*n,e+.9*n,1.8*n,a,.9),s.ico(t-1*n,5.6*n,e-.6*n,1.6*n,a,.9)}}var Bm=new Set,Bo=new Map,zo=Bm;function Bl(s){return s&&Bo.get((s.name||"")+"|"+(s.cc||""))||Bm}var Dm=["#ff4f5e","#ff9f1c","#ffd23f","#3ecf8e","#2ec4f1","#5b6cff","#b45cff","#ff5cc8"];function $M(s,t,e,n){let i="#e7b628",r="#c9961a",a=(h,u,f,d,p,_,g)=>s.box(t+h*1.8,u*1.8,e+f*1.8,d*1.8,p*1.8,_*1.8,g);s.box(t,0,e,13,3.4,13,Zt.stone),s.box(t,3.4,e,10.5,1.6,10.5,"#d8d1c3");let c=5/1.8,l=(h,u,f,d,p,_,g)=>a(h,u+c,f,d,p,_,g);l(-.9,0,0,1.3,6.5,1.5,r),l(.9,0,0,1.3,6.5,1.5,r),l(0,6.5,0,3.6,5.6,2.2,i),l(-2.4,7.2,0,1.1,4.6,1.1,i),l(2.4,10.8,0,1.1,5.4,1.1,i),s.ico(t,(14+c)*1.8,e,1.9*1.8,i),l(0,15.5,0,2.6,.9,2.6,Zt.sun);for(let h of[-1,0,1])l(h*.9,16.4,0,.5,.9,.5,Zt.sun);s.ico(t+2.4*1.8,(17.2+c)*1.8,e,1.1*1.8,"#fff1b8")}var Qe=!1;function zl(s,t){let e=ki(s+"#car");return{garage:Qe&&t>=2&&e%100<45}}function KM(s,t,e,n,i){i=i||s;let r=zi(ki(t)),o=Zt.walls[Math.floor(r()*Zt.walls.length)],a=Zt.roofs[Math.floor(r()*Zt.roofs.length)];zo.has("pink")?(o="#f6a9c8",a="#e0407f"):zo.has("rainbow")&&(a=Dm[ki(t+"#rb")%Dm.length]);let c=8,l=6,h=e>=5?5.8:3.1,u=-5;s.box(0,0,u,c+.5,.45,l+.5,Zt.stone),s.box(0,.45,u,c,h,l,o),s.roof(0,.45+h,u,c+.9,l+1,2.7,a),s.box(2.2,.45+h+.6,u+1.2,.8,2.4,.8,"#a39a8c"),s.box(0,.45,u-l/2-.02,1.1,2.1,.12,Zt.door),s.box(0,0,u-l/2-.55,1.8,.3,1,Zt.stone);let f=.45+(e>=5?[1,3.8]:[1.1]).length;for(let d of e>=5?[1.4,4]:[1.4]){for(let p of[-2.6,2.6])i.box(p,d,u-l/2-.03,1.15,1.05,.1,Zt.win);i.box(-c/2-.03,d,u,.1,1.05,1.15,Zt.win),i.box(c/2+.03,d,u,.1,1.05,1.15,Zt.win),i.box(-1.6,d,u+l/2+.03,1.1,1,.1,Zt.win),i.box(1.6,d,u+l/2+.03,1.1,1,.1,Zt.win)}if(Qe&&zl(t,e).garage){s.box(7.6,0,-5.8,4.8,.3,6.6,Zt.stone),s.box(7.6,.3,-5.8,4.4,2.6,6.2,o),s.box(7.6,2.9,-5.8,4.9,.35,6.7,a),s.box(7.6,.3,-8.92,3.2,2.2,.1,"#d9d4c8");for(let d=1;d<5;d++)s.box(7.6,.3+d*.44,-8.98,3.2,.05,.05,"#b9b2a4")}return n&&(s.cyl(-5.4,0,-8.6,.09,.07,7.5,5,"#5b5b5b"),s.box(-4.4,6,-8.6,1.9,1.2,.08,Zt.sun)),{wy:f}}function Cf(s,t,e,n=0){let i=new wn(t.map(([o,a])=>new vt(o,-a))),r=new Ni(i);r.rotateX(-Math.PI/2),n&&r.translate(0,n,0),s.add(r,e)}function zm(s,t,e){let n=!1;for(let i=0,r=s.length-1;i<s.length;r=i++){let[o,a]=s[i],[c,l]=s[r];a>e!=l>e&&t<(c-o)*(e-a)/(l-a)+o&&(n=!n)}return n}function Nm(s,t,e,n,i){let r=Math.hypot(n-t,i-e);if(r<.3)return;let o=Math.max(1,Math.round(r/2.4)),a=Math.atan2(-(i-e),n-t);for(let c=0;c<=o;c++){let l=c/o;s.box(t+(n-t)*l,0,e+(i-e)*l,.22,1.15,.22,Zt.fenceDark)}for(let c of[.42,.86])s.box((t+n)/2,c,(e+i)/2,r,.12,.08,Zt.fence,a)}function jM(s,t,e){for(let n=0;n<t.length;n++){let[i,r]=t[n],[o,a]=t[(n+1)%t.length];if(!(r<-12.5&&a<-12.5)||Math.abs(o-i)<.01){Nm(s,i,r,o,a);continue}let c=[0,1];for(let[l,h]of e)for(let u of[l,h]){let f=(u-i)/(o-i);f>0&&f<1&&c.push(f)}c.sort((l,h)=>l-h);for(let l=1;l<c.length;l++){let h=(c[l-1]+c[l])/2,u=i+(o-i)*h;e.some(([f,d])=>u>f&&u<d)||Nm(s,i+(o-i)*c[l-1],r+(a-r)*c[l-1],i+(o-i)*c[l],r+(a-r)*c[l])}}}function QM(s,t,e,n,i,r){if(Qe&&t.quad(5.9,-vn/2-.3,9.3,zl(e,n).garage?-9:-6.5,.01,Zt.gravel),zo.has("forest"))for(let[o,a]of[[-7.5,6],[7.5,7],[0,10.5],[-3.5,12.5]])Rs(s,o,a,.85+i()*.35,i()<.4?1:0,i);if(!(n<2)){if(r&&r.length>=3)Cf(t,r,Zt.lawn,-.001),t.quad(-.8,-vn/2-.3,.8,-8.5,0,Zt.gravel),jM(s,r,Qe?[[-1.6,1.6],[5.4,9.8]]:[[-1.6,1.6]]);else{t.quad(-Vn/2+.4,-vn/2+.4,Vn/2-.4,vn/2-.4,0,Zt.lawn),t.quad(-.8,-vn/2+.4,.8,-8.5,0,Zt.gravel);let o=-Vn/2+.5,a=Vn/2-.5,c=-vn/2+.5,l=vn/2-.5,h=1.6,u=Qe?[[o,c,-h,c],[h,c,5.4,c],[9.8,c,a,c],[a,c,a,l],[a,l,o,l],[o,l,o,c]]:[[o,c,-h,c],[h,c,a,c],[a,c,a,l],[a,l,o,l],[o,l,o,c]];for(let[f,d,p,_]of u){let g=Math.hypot(p-f,_-d),m=Math.max(1,Math.round(g/2.4)),y=Math.atan2(-(_-d),p-f);for(let v=0;v<=m;v++){let M=v/m;s.box(f+(p-f)*M,0,d+(_-d)*M,.22,1.15,.22,Zt.fenceDark)}for(let v of[.42,.86])s.box((f+p)/2,v,(d+_)/2,g,.12,.08,Zt.fence,y)}}if(n>=3)if(Rs(s,6.5+i()*2,8+i()*3,.75,i()<.3?1:0,i),i()<.6&&Rs(s,-7+i()*2,9+i()*2,.6,2,i),i()<.5){t.quad(-8,3,-3,8,0,"#a77a4e");for(let o=0;o<4;o++)s.box(-7.4+o*1.3,0,5.5,.5,.35,4.2,"#5aa344")}else for(let o=0;o<5;o++)s.box(-9+o*1.1,0,-10.5,.7,.45,.7,["#e86f8a","#f2c94c","#ffffff","#b07fd1"][o%4])}}function Rf(s){let t=0,e=0,n=s.length-(s.length>1&&s[0][0]===s[s.length-1][0]&&s[0][1]===s[s.length-1][1]?1:0);for(let i=0;i<n;i++)t+=s[i][0],e+=s[i][1];return[t/n,e/n]}function km(s,t){let e=1e9;for(let n=1;n<s.length;n++){let[i,r]=s[n-1],[o,a]=s[n],c=o-i,l=a-r,h=c*c+l*l||1,u=Math.max(0,Math.min(1,((t[0]-i)*c+(t[1]-r)*l)/h));e=Math.min(e,Math.hypot(t[0]-i-c*u,t[1]-r-l*u))}return e}function Om(s,t){t.quad(-Vn/2,-vn/2,Vn/2,vn/2,0,Zt.piazza),s.box(0,0,4,15,.5,10.5,Zt.stone),s.box(0,.5,4,14,6.2,9.5,"#f2e7d3"),s.roof(0,6.7,4,15,10.5,3,"#a9493d");for(let e=0;e<6;e++)s.cyl(-6+e*2.4,.5,-1.2,.35,.35,5.6,8,"#ffffff");s.box(0,6.1,-1.2,14.5,.6,1.2,"#ffffff"),s.box(0,6.7,4,3.4,7.5,3.4,"#efe3cd"),s.cyl(0,14.2,4,2.6,0,3.2,4,"#7a3d34"),s.box(0,11,2.28,1.6,1.6,.1,"#ffffff"),s.cyl(0,17.2,4,.08,.06,3.2,5,"#555555"),s.box(.95,19.2,4,1.8,1.1,.08,Zt.sun),s.cyl(0,0,-8,2.6,2.6,.7,12,Zt.stone),s.cyl(0,.05,-8,2.2,2.2,.7,12,"#7fd3ef"),s.cyl(0,.7,-8,.35,.3,1.6,6,Zt.stone);for(let e of[-7,7])s.box(e,0,-8,2.2,.45,.6,"#8a6440")}function tb(s,t){t.quad(-Vn/2,-vn/2,Vn/2,vn/2,0,"#b4e489");for(let[e,n]of[[-11,-14],[11,-14],[11,14],[-11,14]])s.box(e,0,n,.35,1.3,.35,Zt.fenceDark);for(let[e,n,i,r]of[[-11,-14,11,-14],[11,-14,11,14],[11,14,-11,14],[-11,14,-11,-14]]){let o=Math.hypot(i-e,r-n),a=Math.floor(o/2);for(let c=0;c<a;c+=2){let l=c/a,h=(c+1)/a;s.box(e+(i-e)*(l+h)/2,.02,n+(r-n)*(l+h)/2,Math.abs(i-e)*(h-l)+.15,.06,Math.abs(r-n)*(h-l)+.15,"#ffffff")}}s.cyl(0,0,0,.15,.13,3.2,6,Zt.fenceDark),s.box(0,2.3,0,3.4,1.6,.2,Zt.sun)}async function eb(s){let{container:t,overlay:e,geoB64:n}=s;Qe=!!s.alive;let i=s.pixelRatio||Math.min(2,window.devicePixelRatio||1),r=new lo({antialias:!0,preserveDrawingBuffer:!!s.reel});r.setPixelRatio(i),r.shadowMap.enabled=!0,r.shadowMap.type=yl,r.setClearColor(Zt.sea),t.appendChild(r.domElement);let o=new cr,a=new Ge;o.add(a);let c=new Be(30,1,.001,1e5);c.up.set(0,0,-1);let l=new dr(16777215,13226940,1.9);o.add(l);let h=new pr(16773596,1.7);h.castShadow=!0,h.shadow.mapSize.set(2048,2048),h.shadow.bias=-5e-4,h.shadow.normalBias=0,o.add(h,h.target);let u=new L(-.6,1.25,.45).normalize(),f=new L().crossVectors(new L(0,1,0),u).normalize(),d=new L().crossVectors(u,f).normalize(),p=new Nn({color:Zt.sea,depthTest:!1,depthWrite:!1}),_=new ce(new Jn(1,1).rotateX(-Math.PI/2),p);_.renderOrder=0,_.frustumCulled=!1,o.add(_);let g=Um(n?await ZM(n):await s.geo),m=g.filter(V=>V.kind===0),y=g.filter(V=>V.kind===1),v=JM();v.depthTest=!1,v.depthWrite=!1;let M=[],B=(V,dt,G)=>{let j=new yr({color:V,linewidth:dt,depthTest:!1,depthWrite:!1,transparent:!1});return j._order=G,M.push(j),j},R=B(Zt.halo,7,1),P=B(Zt.coast,1.8,3),z=B(Zt.border,1.5,4);z.transparent=!0,z.opacity=.9;function rt(V,dt){let G=V.half/32767,j=[],lt=[],tt=[],$=32767,It=(q,at)=>Math.abs(q)>$-2500&&Math.abs(at)>$-2500&&q*at>0,Nt=(q,at,S,x)=>It(q,S)&&Math.abs(S-q)<.25*Math.abs(x-at),ie=(q,at,S,x)=>It(at,x)&&Math.abs(x-at)<.25*Math.abs(S-q),H=q=>{if(!dt)return q;let at=q.length/2,S=Float32Array.from(q);for(let x=0;x<at;x++){let E=(x+1)%at,F=q[x*2],N=q[x*2+1],U=q[E*2],C=q[E*2+1];Nt(F,N,U,C)&&(S[x*2]=S[E*2]=Math.sign(F)*$),ie(F,N,U,C)&&(S[x*2+1]=S[E*2+1]=Math.sign(N)*$)}return S};for(let q of V.items){let at=j.length/3;if(q.idx){for(let S of q){let x=H(S);for(let E=0;E<x.length;E+=2)j.push(x[E]*G,0,-x[E+1]*G)}for(let S=0;S<q.idx.length;S+=3){let x=at+q.idx[S],E=at+q.idx[S+1],F=at+q.idx[S+2];(j[E*3]-j[x*3])*(j[F*3+2]-j[x*3+2])-(j[E*3+2]-j[x*3+2])*(j[F*3]-j[x*3])<0?lt.push(x,E,F):lt.push(x,F,E)}}else{let S=q.map(E=>{let F=H(E),N=[];for(let U=0;U<F.length;U+=2)N.push(new vt(F[U]*G,F[U+1]*G));return N.length>1&&N[0].equals(N[N.length-1])&&N.pop(),N}),x=Un.triangulateShape(S[0],S.slice(1));for(let E of S)for(let F of E)j.push(F.x,0,-F.y);for(let E of x)lt.push(at+E[0],at+E[1],at+E[2])}for(let S of q){let x=S.length/2,E=q.idx?x:x-1;for(let F=0;F<E;F++){let N=(F+1)%x,U=S[F*2],C=S[F*2+1],O=S[N*2],J=S[N*2+1],Q=(X,mt)=>Math.abs(X)>=$-8||Math.abs(mt)>=$-8;Q(U,C)&&Q(O,J)||Nt(U,C,O,J)||ie(U,C,O,J)||tt.push(U*G,0,-C*G,O*G,0,-J*G)}}}let Rt=new he;return Rt.setAttribute("position",new Yt(j,3)),Rt.setIndex(j.length/3>65535?new ds(lt,1):new fs(lt,1)),Rt.setAttribute("normal",new Yt(new Float32Array(j.length).map((q,at)=>at%3===1?1:0),3)),{g:Rt,coast:tt}}function b(V,dt){let G=new vr;G.setPositions(V);let j=new Ol(G,dt);return j.renderOrder=dt._order,j}function T(V){let dt=V.half/32767,G=[];for(let j of V.items)for(let lt of j)for(let tt=0;tt+3<lt.length;tt+=2)G.push(lt[tt]*dt,0,-lt[tt+1]*dt,lt[tt+2]*dt,0,-lt[tt+3]*dt);return G}let et=new Ge;a.add(et);{let V=[],dt=[],G=[];for(let lt of m.find(tt=>tt.lod===1).cells){let{g:tt,coast:$}=rt(lt,!0);tt.translate(lt.cx,0,-lt.cy),V.push(tt);for(let It=0;It<$.length;It+=3)dt.push($[It]+lt.cx,0,$[It+2]-lt.cy)}for(let lt of y.find(tt=>tt.lod===1).cells){let tt=T(lt);for(let $=0;$<tt.length;$+=3)G.push(tt[$]+lt.cx,0,tt[$+2]-lt.cy)}let j=new ce(Ef(V),v);j.renderOrder=2,j.receiveShadow=!0,j.frustumCulled=!1,et.add(j),et.add(b(dt,R),b(dt,P),b(G,z)),et.children.forEach(lt=>lt.frustumCulled=!1)}let nt=new Ge;a.add(nt);let ot=new Map,yt=!1;function it(V,dt){for(let G of V.find(j=>j.lod===0).cells)ot.set(Math.round(G.cx)+","+Math.round(G.cy),{land:G});for(let G of dt.find(j=>j.lod===0).cells){let j=Math.round(G.cx)+","+Math.round(G.cy);(ot.get(j)||ot.set(j,{}).get(j)).bord=G}yt=!0}m.some(V=>V.lod===0)?it(m,y):s.fine&&s.fine.then(V=>{let dt=Um(V);it(dt.filter(G=>G.kind===0),dt.filter(G=>G.kind===1)),s.onFine&&s.onFine()});function wt(V,dt,G,j){for(let[lt,tt]of ot){let $=tt.land||tt.bord;if(G<$.cx-$.half||V>$.cx+$.half||j<$.cy-$.half||dt>$.cy+$.half){tt.obj&&(tt.obj.visible=!1);continue}if(!tt.obj){let It=new Ge;if(It.position.set($.cx,0,-$.cy),tt.land){let{g:Nt,coast:ie}=rt(tt.land),H=new ce(Nt,v);H.renderOrder=2,H.receiveShadow=!0,It.add(H,b(ie,R),b(ie,P))}tt.bord&&It.add(b(T(tt.bord),z)),tt.obj=It,nt.add(It)}tt.obj.visible=!0}}let ct=Lm({THREE:Ll,Kit:Pe,tree:Rs,rand:zi,hashStr:ki,PAL:Zt,LOT_W:Vn,LOT_D:vn,scene:o,renderer:r,camera:c,get view(){return Lt},hemi:l,sun:h,carSpot:zl,piazzaC:Rf,polyFill:Cf,inPoly:zm,merc:Fo,unmerc:Tf,get villages(){return Vt},lawsOf:Bl,get ALIVE(){return Qe},flight:(V,dt)=>gt(V,dt),label:(...V)=>oe(...V),project:(...V)=>qt(...V)}),Ut=new Oi({vertexColors:!0}),Bt=new Oi({vertexColors:!0,depthTest:!1,depthWrite:!1,side:bn}),Vt=[],se=new Ge;a.add(se);function fe(V){let dt=V.k/1e3,G=new Ge;G.position.set(V.cx,0,-V.cy),G.scale.setScalar(dt),G.visible=!1,se.add(G);let j={v:V,grp:G,s:dt,shown:-1,built:!1,houses:[],pop:[]};return Vt.push(j),j}function pt(V){let dt=V.v,G=new Pe,j=new Pe,lt=zi(ki(dt.name||"x"));for(let[It,Nt,ie,H,Rt]of dt.fields||[]){j.quad(It,-H,ie,-Nt,0,Zt.fields[Rt]);let q=ie-It<H-Nt,at=Math.floor((q?ie-It:H-Nt)/6),S=new Gt(Zt.fields[Rt]).multiplyScalar(.9);for(let x=1;x<at;x++)q?j.quad(It+x*6-.9,-H+1,It+x*6+.9,-Nt-1,0,S):j.quad(It+1,-(Nt+x*6)-.9,ie-1,-(Nt+x*6)+.9,0,S)}let tt=G.geo(),$=j.geo();if($){let It=new ce($,Bt);It.renderOrder=5,It.receiveShadow=!0,V.grp.add(It)}V.built=!0}function Et(V,dt){if(!V.roads&&V.stages)return dt>0?V.stages[Math.min(dt,V.stages.length)-1]:{level:0,streets:[],piazza:null};let G=dt<=0?0:dt>=75?5:dt>=30?4:dt>=12?3:dt>=3?2:1;return{level:G,streets:G>=2&&V.roads?V.roads.filter(j=>j[4]<=dt):[],piazza:G>=3&&V.piazza?V.piazza:null,v2:!0}}function Jt(V,dt,G,j){let lt=V.v;if(zo=Bl(lt),dt!==V.shown){for(let N of V.stageObjs||[])V.grp.remove(N),N.traverse(U=>U.geometry&&U.geometry.dispose());V.stageObjs=[],V.houses=[],V.treeM&&(V.grp.remove(V.treeM),V.treeM.geometry.dispose(),V.treeM=null);{let N=[],U=dt>0?Et(lt,dt):null;if(lt.stages){let Q=lt.ghost&&dt===0?lt.lots.slice(0,1):lt.lots.slice(0,dt);for(let X of Q)N.push([X.x-14,X.y-17,X.x+14,X.y+17]);if(U&&U.piazza&&N.push([-14,U.piazza[1]-17,14,U.piazza[1]+17]),U)for(let[X,mt,st,bt]of U.streets)N.push([Math.min(X,st)-8,Math.min(mt,bt)-7,Math.max(X,st)+8,Math.max(mt,bt)+7])}Qe&&N.push(...ct.occupied(lt,dt));let C=new Pe,O=zi(ki(lt.name||"x"));for(let[Q,X,mt,st]of lt.trees||[]){let bt=zi(ki(Q+","+X));N.some(Wt=>Q>Wt[0]&&Q<Wt[2]&&X>Wt[1]&&X<Wt[3])||Rs(C,Q,-X,mt,st,bt)}let J=C.geo();J&&(V.treeM=new ce(J,Ut),V.treeM.castShadow=V.treeM.receiveShadow=!0,V.treeM.renderOrder=10,V.grp.add(V.treeM))}let tt=Et(lt,dt),$=tt.level,It=new Pe,Nt=new Pe,ie=new Pe,H=[];if(lt.ghost&&dt===0&&lt.lots.length){let N=new Pe,U=new Pe;tb(N,U);let C=lt.lots[0],O=N.geo(),J=U.geo(),Q=new Ge;if(Q.position.set(C.x,0,-C.y),J){let X=new ce(J,Bt);X.renderOrder=6,X.receiveShadow=!0,Q.add(X)}if(O){let X=new ce(O,Ut);X.castShadow=X.receiveShadow=!0,X.renderOrder=10,Q.add(X)}V.grp.add(Q),V.stageObjs.push(Q)}if(tt.v2){let N=$>=3?6:3.4,U=tt.streets.map(([O,J,Q,X])=>{let mt=Q-O,st=X-J;return{L:Math.hypot(mt,st),ry:Math.atan2(st,mt),cx:(O+Q)/2,cz:-(J+X)/2}});if($>=3)for(let O of U)Nt.quadR(O.cx,O.cz,O.L+N+2.2,N+2.2,O.ry,0,Zt.curb);for(let O of U)Nt.quadR(O.cx,O.cz,O.L+N,N,O.ry,0,$>=3?Zt.road:Zt.lane);let C=0;for(let O of U){let J=Math.cos(O.ry),Q=Math.sin(O.ry);if($>=3&&O.L>6)for(let X=-O.L/2+2;X<O.L/2-2;X+=9)Nt.quadR(O.cx+J*X,O.cz-Q*X,Math.min(3,O.L/2-2-X),.35,O.ry,0,"#e9e6dc");if($>=4)for(let X=-O.L/2;X<O.L/2;X+=1){if(++C<26)continue;C=0;let mt=O.cx+J*X+Q*4.4,st=O.cz-Q*X+J*4.4;It.cyl(mt,0,st,.14,.1,4.2,5,"#3d4a52"),(Qe?ie:It).box(mt,4.1,st,.6,.45,.6,"#ffe7a3"),Qe&&H.push([mt,st])}}}else for(let[N,U,C,O]of tt.streets){let J=$>=3?6:3.4,Q=C-N,X=O-U,mt=Math.hypot(Q,X),st=Math.atan2(X,Q),bt=(N+C)/2,Wt=-(U+O)/2;if($>=3&&Nt.quadR(bt,Wt,mt+8.5,J+2.2,st,0,Zt.curb),Nt.quadR(bt,Wt,mt+($>=3?6:3),J,st,0,$>=3?Zt.road:Zt.lane),$>=3)for(let St=-mt/2;St<mt/2;St+=9)Nt.quadR(bt+Math.cos(st)*St,Wt-Math.sin(st)*St,3,.35,st,0,"#e9e6dc");if($>=4)for(let St=-mt/2+4;St<mt/2;St+=22){let ue=bt+Math.cos(st)*St,de=Wt-Math.sin(st)*St+4.4;It.cyl(ue,0,de,.14,.1,4.2,5,"#3d4a52"),(Qe?ie:It).box(ue,4.1,de,.6,.45,.6,"#ffe7a3"),Qe&&H.push([ue,de])}}let Rt=!j,q=new Pe,at=new Pe,S=Qe?new Pe:null,x=new ne;for(let N=0;N<Math.min(dt,lt.lots.length);N++){let U=lt.lots[N],C=new Pe,O=new Pe,J=Qe?new Pe:null,Q=zi(ki(U.user)^77);if(KM(C,U.user,$,N===0&&!lt.ghost,J),QM(C,O,U.user,$,Q,U.poly),Rt){x.makeRotationY(U.rot!=null?U.rot:U.face===1?0:Math.PI).setPosition(U.x,0,-U.y);for(let[Wt,St]of[[C,q],[O,at],[J,S]])if(Wt)for(let ue of Wt.parts)ue.applyMatrix4(x),St.parts.push(ue);continue}let X=new Ge;X.position.set(U.x,0,-U.y),X.rotation.y=U.rot!=null?U.rot:U.face===1?0:Math.PI;let mt=C.geo(),st=O.geo();if(st){let Wt=new ce(st,Bt);Wt.renderOrder=6,Wt.receiveShadow=!0,X.add(Wt)}let bt=new ce(mt,Ut);if(bt.castShadow=bt.receiveShadow=!0,bt.renderOrder=10,X.add(bt),J){let Wt=J.geo();if(Wt){let St=new ce(Wt,ct.glowMat);St.renderOrder=10,X.add(St)}}V.grp.add(X),V.stageObjs.push(X),V.houses.push({grp:X,hm:bt,user:U.user,i:N,t:j?j[N]:-1e9})}if(Rt){let N=q.geo(),U=at.geo(),C=S&&S.geo();if(U){let O=new ce(U,Bt);O.renderOrder=6,O.receiveShadow=!0,V.grp.add(O),V.stageObjs.push(O)}if(N){let O=new ce(N,Ut);O.castShadow=O.receiveShadow=!0,O.renderOrder=10,V.grp.add(O),V.stageObjs.push(O)}if(C){let O=new ce(C,ct.glowMat);O.renderOrder=10,V.grp.add(O),V.stageObjs.push(O)}}if(tt.piazza&&tt.v2){let N=new Pe,U=new Pe,C=tt.piazza,O=Rf(C),J=km(C,O),Q=new wn(C.map(([w,k])=>new vt(w,k))),X=new Ni(Q);X.rotateX(-Math.PI/2),U.add(X,"#9fd77a");let mt=Math.max($>=4?16:9,Math.min($>=4?24:15,J-8)),st=new wn;for(let w=0;w<=40;w++){let k=w/40*Math.PI*2;st[w?"lineTo":"moveTo"](O[0]+Math.cos(k)*mt,O[1]+Math.sin(k)*mt)}let bt=new Ni(st);bt.rotateX(-Math.PI/2),bt.translate(0,.004,0),U.add(bt,Zt.piazza);let Wt=new Ge;Wt.position.set(O[0],0,-O[1]);let St=new Pe,ue=new Pe;zo.has("statue")&&$M(St,$>=4?13:10,-9,lt.lots[0]&&lt.lots[0].user),$>=4?Om(St,new Pe):(St.cyl(0,0,0,2.6,2.6,.7,12,Zt.stone),St.cyl(0,.05,0,2.2,2.2,.7,12,"#7fd3ef"),St.cyl(0,.7,0,.35,.3,1.6,6,Zt.stone));let de=J-mt,Te=[];if(de>1){let w=0,k=0;for(let Y=1;Y<C.length;Y++){let W=Math.hypot(C[Y][0]-C[Y-1][0],C[Y][1]-C[Y-1][1]);W>w&&(w=W,k=Math.atan2(C[Y][1]-C[Y-1][1],C[Y][0]-C[Y-1][0]))}$<4&&(k+=Math.PI/4);let Z=new Set;for(let Y=0;Y<4;Y++){let W=k+Y*Math.PI/2,ht=Math.cos(W),xt=Math.sin(W),ut=1/0,Pt=-1;for(let ei=1;ei<C.length;ei++){let[tn,Hi]=C[ei-1],[kl,ko]=C[ei],Pf=kl-tn,If=ko-Hi,Hl=ht*If-xt*Pf;if(Math.abs(Hl)<1e-9)continue;let Vl=((tn-O[0])*If-(Hi-O[1])*Pf)/Hl,Lf=((tn-O[0])*xt-(Hi-O[1])*ht)/Hl;Vl>0&&Lf>=0&&Lf<=1&&Vl<ut&&(ut=Vl,Pt=ei)}if(Pt<0||Z.has(Pt))continue;Z.add(Pt);let[Ht,jt]=C[Pt-1],[Xt,le]=C[Pt],$t=Xt-Ht,pe=le-jt,Re=$t*$t+pe*pe,xe=((O[0]-Ht)*$t+(O[1]-jt)*pe)/Re,te,Ae;xe>.08&&xe<.92?(te=Ht+$t*xe,Ae=jt+pe*xe):(te=O[0]+ht*ut,Ae=O[1]+xt*ut);let ye=te-O[0],Ve=Ae-O[1],gn=Math.hypot(ye,Ve),Ie=Math.atan2(Ve,ye);if(gn<mt+1)continue;let Ps=mt-.6,Ce=gn+.5,Fn=(Ps+Ce)/2;U.quadR(O[0]+Math.cos(Ie)*Fn,-O[1]-Math.sin(Ie)*Fn,Ce-Ps,2.2,Ie,.006,Zt.piazza),Te.push(Ie)}}if(de>6){let w=mt+de*.5,k=Math.max(8,Math.round(w*2*Math.PI/7));for(let Z=0;Z<k;Z++){let Y=(Z+.5)/k*Math.PI*2;Te.some(W=>Math.abs(Math.atan2(Math.sin(Y-W),Math.cos(Y-W)))<2.6/w)||Rs(St,Math.cos(Y)*w,-Math.sin(Y)*w,.6+.25*(Z*7%3)/2,Z%4===0?1:0,zi(Z+7))}}else{let w=mt-3;if(w>19)for(let k=0;k<12;k++){let Z=(k+.5)/12*Math.PI*2;Rs(St,Math.cos(Z)*w,Math.sin(Z)*w,.55,0,zi(k+7))}}let ln=U.geo();if(ln){let w=new ce(ln,Bt);w.renderOrder=6,V.grp.add(w),V.stageObjs.push(w)}let At=St.geo(),ae=ue.geo();if(ae){let w=new ce(ae,Bt);w.renderOrder=6,Wt.add(w)}if(At){let w=new ce(At,Ut);w.castShadow=w.receiveShadow=!0,w.renderOrder=10,Wt.add(w)}V.grp.add(Wt),V.stageObjs.push(Wt)}else if(tt.piazza){let N=new Pe,U=new Pe;$>=4?Om(N,U):(U.quad(-Vn/2+2,-vn/2+2,Vn/2-2,vn/2-2,0,Zt.piazza),N.cyl(0,0,0,2.6,2.6,.7,12,Zt.stone),N.cyl(0,.05,0,2.2,2.2,.7,12,"#7fd3ef"),N.cyl(0,.7,0,.35,.3,1.6,6,Zt.stone));let C=new Ge;C.position.set(tt.piazza[0],0,-tt.piazza[1]);let O=N.geo(),J=U.geo();if(J){let Q=new ce(J,Bt);Q.renderOrder=6,C.add(Q)}if(O){let Q=new ce(O,Ut);Q.castShadow=Q.receiveShadow=!0,Q.renderOrder=10,C.add(Q)}V.grp.add(C),V.stageObjs.push(C)}let E=It.geo(),F=Nt.geo();if(F){let N=new ce(F,Bt);N.renderOrder=6,N.receiveShadow=!0,V.grp.add(N),V.stageObjs.push(N)}if(E){let N=new ce(E,Ut);N.castShadow=N.receiveShadow=!0,N.renderOrder=10,V.grp.add(N),V.stageObjs.push(N)}{let N=ie.geo();if(N){let U=new ce(N,ct.glowMat);U.renderOrder=10,V.grp.add(U),V.stageObjs.push(U)}}V.shown=dt,Qe&&ct.build(V,tt,dt,H)}for(let tt of V.houses){let $=(G-tt.t)/.45,It=$>=1?1:$<=0?.001:Ct($);tt.grp.scale.setScalar(It)}}function Ct(V){return 1+(1.9+1)*Math.pow(V-1,3)+1.9*Math.pow(V-1,2)}let re=document.createElement("style");re.textContent=`.ocw-l{position:absolute;left:0;top:0;pointer-events:none;white-space:nowrap;will-change:transform}
  .ocw-l.ocw-dot{width:10px;height:10px;margin:-7px 0 0 -7px;border-radius:50%;background:${Zt.sun};border:2px solid #10232b;box-shadow:0 1px 3px rgba(0,0,0,.35)}
  .ocw-city{font:700 13px/1 Figtree,system-ui,sans-serif;color:#10232b;background:rgba(255,255,255,.94);border-radius:999px;padding:5px 9px;box-shadow:0 2px 6px rgba(0,0,0,.18);transform-origin:50% 100%}
  .ocw-city b{color:#b07b00;margin-left:4px}
  .ocw-house{font:800 11px/1 Figtree,system-ui,sans-serif;color:#10232b;background:#fff;border:2px solid #10232b;border-radius:999px;padding:3px 6px;max-width:92px;overflow:hidden;text-overflow:ellipsis;box-shadow:0 2px 0 rgba(16,35,43,.3)}
  .ocw-house.f{background:${Zt.sun};color:#10232b;font-size:12px}
  .ocw-ghost{font:400 17px/1 "Lilita One",system-ui,sans-serif;color:#2a2100;background:${Zt.sun};border-radius:10px;padding:6px 11px;box-shadow:0 0 0 3px #10232b}
  .ocw-joke{font:400 18px/1 "Lilita One",system-ui,sans-serif;color:#fff;background:#e0754f;border-radius:10px;padding:6px 11px;box-shadow:0 0 0 3px #10232b}`,document.head.appendChild(re);let ee=[];function oe(V,dt,G,j={}){let lt=document.createElement("div");lt.className="ocw-l "+V,lt.innerHTML=dt,e.appendChild(lt);let tt={el:lt,world:G,...j,vis:!0};return ee.push(tt),tt}let Lt={x:0,y:0,h:2e4},ft=1,D=1,Dt=30,Ot=Math.tan(Dt*Math.PI/360);function Tt(V){let dt=Math.log(V),G=Es.clamp((Math.log(60)-dt)/(Math.log(60)-Math.log(.5)),0,1);return G*G*(3-2*G)*42*Math.PI/180}function zt(){let V=s.tilt===!1?0:Tt(Lt.h),dt=Lt.h/2/Ot;Fm.value.set(Lt.x,0,-Lt.y),a.position.set(-Lt.x,0,Lt.y),c.position.set(0,dt*Math.cos(V),dt*Math.sin(V)),c.near=dt*.02,c.far=dt*8,c.lookAt(0,0,0),c.updateProjectionMatrix();let G=Lt.h>250||!yt;if(et.visible=G,nt.visible=!G,!G){let tt=Lt.h*(ft/D)*.75+5,$=Lt.h*1.2+5;wt(Lt.x-tt,Lt.y-$,Lt.x+tt,Lt.y+$*1.4)}_.scale.setScalar(dt*20);for(let tt of M)tt.resolution.set(ft,D);let j=Lt.h>3e3?.75:Lt.h>300?.9:1;if(R.linewidth=7*j,P.linewidth=1.8*j,!0){let tt=Math.pow(2,Math.ceil(Math.log2(Lt.h*1.1))),$=2*tt/h.shadow.mapSize.x,It=Lt.x,Nt=-Lt.y,ie=It*f.x+Nt*f.z,H=It*d.x+Nt*d.z,Rt=Math.round(ie/$)*$-ie,q=Math.round(H/$)*$-H,at=new L().addScaledVector(f,Rt).addScaledVector(d,q);h.target.position.copy(at),h.position.copy(u).multiplyScalar(tt*2).add(at),h.shadow.normalBias=$*1.6,h.shadow.bias=-$*.15;let S=h.shadow.camera;S.left=-tt,S.right=tt,S.top=tt,S.bottom=-tt,S.near=tt*.5,S.far=tt*4,S.updateProjectionMatrix()}for(let tt of Vt){let $=tt.v.cx-Lt.x,It=tt.v.cy-Lt.y,Nt=Lt.h<14&&Math.abs($)<Lt.h*1.2+2&&Math.abs(It)<Lt.h*1.6+2;Nt&&!tt.built&&tt.v.fields&&pt(tt),tt.grp.visible=Nt&&!tt.grp.userData.hide}}let Qt=new L;function qt(V,dt,G=0){return Qt.set(V-Lt.x,G,-(dt-Lt.y)).project(c),[(Qt.x+1)/2*ft,(1-Qt.y)/2*D,Qt.z]}let I=[];function A(V){if(V._anc)return V._anc;let dt=/translate\((-?[\d.]+)%,\s*(-?[\d.]+)%\)/.exec(V.css||"");return V._anc=dt?[-dt[1]/100,-dt[2]/100]:[0,0]}function K(){let V=I.slice(),dt=ee.slice().sort((G,j)=>(j.prio||0)-(G.prio||0));for(let G of dt){let j=G.show?G.show(Lt.h):!0,lt=0,tt=0;if(j){let $;[lt,tt,$]=qt(G.world.x,G.world.y,G.world.h||0),j=$<1&&lt>-80&&lt<ft+80&&tt>-40&&tt<D+40}if(j&&!G.free){G.vis||(G.el.style.display="",G.vis=!0),G.w||(G.w=G.el.offsetWidth,G.h=G.el.offsetHeight);let[$,It]=A(G),Nt=lt-$*G.w-2,ie=G.stack||0;j=!1;for(let H=0;H<=ie;H++){let Rt=tt-It*G.h-2-H*(G.h+3),q=[Nt,Rt,Nt+G.w+4,Rt+G.h+4];if(!V.some(at=>q[0]<at[2]&&q[2]>at[0]&&q[1]<at[3]&&q[3]>at[1])){V.push(q),tt-=H*(G.h+3),j=!0;break}}}if(j){let $=G.alpha?G.alpha(Lt.h):1;G.el.style.opacity=$,G.el.style.transform=`translate(${lt.toFixed(1)}px,${tt.toFixed(1)}px)`+(G.css||""),$<=.01&&(j=!1)}j!==G.vis&&(G.el.style.display=j?"":"none",G.vis=j)}}function _t(V,dt){ft=V,D=dt,r.setSize(V,dt),c.aspect=V/dt,c.updateProjectionMatrix()}function Mt(){zt(),Qe&&ct.view(),r.render(o,c),K()}function gt(V,dt,G=1.35){let j=dt.x-V.x,lt=dt.y-V.y,tt=Math.hypot(j,lt),$=V.h,It=dt.h;if(tt<1e-6*Math.max($,It))return{S:Math.abs(Math.log(It/$))/G,at:x=>({x:V.x,y:V.y,h:$*Math.exp((It>$?1:-1)*G*x)})};let Nt=G*G,ie=(It*It-$*$+Nt*Nt*tt*tt)/(2*$*Nt*tt),H=(It*It-$*$-Nt*Nt*tt*tt)/(2*It*Nt*tt),Rt=Math.log(Math.sqrt(ie*ie+1)-ie);return{S:(Math.log(Math.sqrt(H*H+1)-H)-Rt)/G,at:S=>{let x=$/(Nt*tt)*(Math.cosh(Rt)*Math.tanh(G*S+Rt)-Math.sinh(Rt));return{x:V.x+j*x,y:V.y+lt*x,h:$*Math.cosh(Rt)/Math.cosh(G*S+Rt)}}}}let Kt=V=>V<.5?4*V*V*V:1-Math.pow(-2*V+2,3)/2;function Ft(V){let dt=V.map(lt=>{let tt=Fo(lt.lat,lt.lon);return{t:lt.t,x:tt.x,y:tt.y,h:lt.h,dur:lt.dur}}),G=[],j={x:dt[0].x,y:dt[0].y,h:dt[0].h};for(let lt=0;lt<dt.length;lt++){let tt=dt[lt],$=gt(j,tt),It=tt.dur!=null?tt.dur:lt===0?0:Es.clamp(.8+$.S*.32,1,2.8);G.push({t0:tt.t,dur:It,f:$,to:tt}),j={x:tt.x,y:tt.y,h:tt.h}}return lt=>{let tt=0;for(;tt<G.length-1&&lt>=G[tt+1].t0;)tt++;let $=G[tt],It=$.dur>0?Es.clamp((lt-$.t0)/$.dur,0,1):1,Nt=$.f.at(Kt(It)*$.f.S),ie=Math.max(0,lt-$.t0-$.dur);Lt.x=Nt.x,Lt.y=Nt.y,Lt.h=Nt.h*Math.exp(-.018*ie)}}return{THREE:Ll,renderer:r,scene:o,camera:c,view:Lt,villages:Vt,alive:Qe?ct:null,labels:ee,reserve:I,placeLabels:K,resize:_t,render:Mt,project:qt,timeline:Ft,flight:gt,merc:Fo,unmerc:Tf,label:oe,addVillage:fe,setPop:Jt,setLaws(V){let dt=new Map(Bo);Bo.clear();for(let[j,lt]of Object.entries(V||{}))lt&&lt.length&&Bo.set(j,new Set(lt));let G=j=>j?[...j].sort().join(","):"";for(let j of Vt){let lt=(j.v.name||"")+"|"+(j.v.cc||"");G(dt.get(lt))!==G(Bo.get(lt))&&(j.shown=-1)}},lawsOf:Bl,set(V,dt,G){Lt.x=V,Lt.y=dt,Lt.h=G},lookAt(V,dt,G){let j=Fo(V,dt);Lt.x=j.x,Lt.y=j.y,Lt.h=G}}}return Xm(nb);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
