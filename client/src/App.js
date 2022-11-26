import React from 'react';
import './index.css'
import FileList from './FileList.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
	BrowserRouter,
	Routes,
	Route,
	Link,
} from 'react-router-dom';

function App() {

  const divStyle = {
    padding: '14px 16px'
  };

  const divStyle2 = {
    padding: '8px 1px 1px 1px',
    width: '100px'
  };

  return (
    <BrowserRouter>
      <div id='navbar'>
        <Link className='active' to='/' style={divStyle}>MyFiles</Link>
        <Link to='/google-drive' className='svga'>
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" transform="scale(0.8)"><defs><radialGradient id="A" cx="-254.817" cy="705.837" gradientTransform="matrix(2.827,1.6322,-1.6322,2.827,1967.2161,-1760.7166)" gradientUnits="userSpaceOnUse" r="82.973"><stop offset="0" stop-color="#ffd24d"/><stop offset="1" stop-color="#f6c338"/></radialGradient><radialGradient id="B" cx="-254.82" cy="705.836" gradientTransform="matrix(2.827,1.6322,-1.6322,2.827,1967.2161,-1760.7166)" gradientUnits="userSpaceOnUse" r="82.978"><stop offset="0" stop-color="#4387fd"/><stop offset=".65" stop-color="#3078f0"/><stop offset=".91" stop-color="#2b72ea"/><stop offset="1" stop-color="#286ee6"/></radialGradient></defs><g transform="translate(0 -.561)"><path d="M34.985 48.223c0-1.515-1.1-2.552-2.376-2.552s-2.376 1.037-2.376 2.552c0 1.5 1.1 2.552 2.376 2.552s2.376-1.054 2.376-2.552zm1.85 0c0 2.423-1.897 4.212-4.225 4.212s-4.225-1.788-4.225-4.212c0-2.442 1.897-4.212 4.225-4.212s4.225 1.77 4.225 4.212zm7.266 0c0-1.515-1.1-2.552-2.376-2.552s-2.376 1.037-2.376 2.552c0 1.5 1.1 2.552 2.376 2.552s2.376-1.054 2.376-2.552zm1.85 0c0 2.423-1.897 4.212-4.225 4.212S37.5 50.647 37.5 48.223c0-2.442 1.897-4.212 4.225-4.212s4.225 1.77 4.225 4.212zm7.1.015c0-1.483-.99-2.567-2.248-2.567-1.276 0-2.345 1.085-2.345 2.567 0 1.468 1.07 2.537 2.345 2.537 1.26 0 2.248-1.07 2.248-2.537zm1.626-3.973v7.562c0 3.11-1.835 4.38-4.003 4.38-2.042 0-3.27-1.365-3.733-2.482l1.6-.67c.288.686.99 1.495 2.12 1.495 1.388 0 2.248-.857 2.248-2.47v-.606h-.065c-.414.51-1.212.957-2.218.957-2.106 0-4.035-1.835-4.035-4.195 0-2.378 1.93-4.227 4.035-4.227 1.005 0 1.802.446 2.218.942h.065v-.685h1.757zm1.092-4.432h1.804v12.344h-1.804zm4.415 8.26l3.764-1.563c-.207-.526-.83-.892-1.563-.892-.94 0-2.248.83-2.2 2.455zm4.42 1.515l1.436.957c-.464.686-1.58 1.867-3.5 1.867-2.393 0-4.18-1.85-4.18-4.212 0-2.505 1.802-4.212 3.973-4.212 2.186 0 3.255 1.74 3.604 2.68l.192.48-5.63 2.332c.43.845 1.102 1.276 2.042 1.276s1.595-.462 2.074-1.166zm-43.06-2.484V45.34h6.022c.06.312.09.68.09 1.077 0 1.34-.367 3-1.548 4.18-1.15 1.196-2.617 1.835-4.562 1.835-3.604 0-6.635-2.936-6.635-6.538s3.03-6.538 6.635-6.538a6.23 6.23 0 0 1 4.482 1.802l-1.26 1.26c-.765-.718-1.802-1.276-3.223-1.276-2.632 0-4.692 2.12-4.692 4.753s2.06 4.753 4.692 4.753c1.707 0 2.68-.686 3.303-1.308.505-.505.838-1.227.968-2.212zm48.962 5.052V40.79h3.483c1.74 0 3.136.525 4.19 1.575s1.583 2.423 1.583 4.12c0 1.708-.528 3.083-1.583 4.128s-2.452 1.567-4.19 1.567h-3.483zm1.462-9.988v8.59h2.02c1.326 0 2.37-.38 3.133-1.137s1.145-1.8 1.145-3.157c0-1.336-.382-2.386-1.145-3.15S75.322 42.2 73.996 42.2H71.98zm10.418 9.988h-1.462v-7.794h1.4v1.272h.063c.148-.413.453-.766.915-1.058s.915-.437 1.36-.437c.424 0 .785.063 1.082.19l-.445 1.415c-.18-.074-.467-.112-.86-.112-.55 0-1.03.223-1.44.668s-.613.965-.613 1.56v4.295zM88.6 41.695c.005.275-.105.54-.302.732-.202.202-.445.302-.732.302s-.53-.1-.732-.302-.302-.445-.302-.732c-.005-.275.105-.54.302-.732.192-.197.457-.307.732-.302.275-.005.54.105.732.302.2.202.302.445.302.732zm-.302 2.688v7.794h-1.462v-7.794zm5.692 7.793H92.53l-3.15-7.794h1.6l2.288 6.044h.032l2.322-6.044h1.56zm7.396.255c-1.145 0-2.09-.392-2.83-1.177S97.44 49.48 97.44 48.28c0-1.188.36-2.176 1.082-2.967s1.643-1.185 2.768-1.185c1.154 0 2.076.374 2.76 1.12s1.026 1.795 1.026 3.142l-.016.16h-6.122c.02.763.276 1.378.763 1.845a2.44 2.44 0 0 0 1.75.7c.933 0 1.665-.467 2.195-1.4l1.304.636c-.35.658-.835 1.172-1.455 1.543s-1.323.557-2.108.557zm-2.338-5.1h4.47a1.95 1.95 0 0 0-.66-1.346c-.398-.358-.93-.533-1.598-.533-.55 0-1.026.17-1.423.51s-.66.795-.787 1.368z" fill="#787879"/><g transform="matrix(.2414 0 0 .2414 73.374441 69.15899)"><path d="M-100.704-145.738l-24.2-41.9 45.3-78.5 24.2 41.9z" fill="#0da960"/><path d="M-100.704-145.738l24.2-41.9h90.6l-24.2 41.9z" fill="url(#B)"/><path d="M14.096-187.638h-48.4l-45.3-78.5h48.4z" fill="url(#A)"/><path d="M-55.404-187.638h-21.1l10.5-18.3-34.7 60.2z" fill="#2d6fdd"/><path d="M-34.304-187.638h48.4l-58.9-18.3z" fill="#e5b93c"/><path d="M-66.004-205.938l10.6-18.3-24.2-41.9z" fill="#0c9b57"/></g></g></svg>
        </Link>
        <Link to='/microsoft-azure' className='svga'>
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" transform="scale(0.8)" viewBox="0 0 120 60"><g transform="matrix(.229053 0 0 .229053 -.144648 10.46444)" fill="#035bda"><path d="M266.244 82.663h-7.824V52.117c-.04-3.022.074-6.045.34-9.056a16.68 16.68 0 0 1-1.366 4.358l-14.33 35.528h-5.456l-14.353-35.173-1.366-4.737c.34 2.013.34 5.03.34 9.395v30.586h-7.508V35.703h11.258l12.632 31.533 2.045 5.37a35.53 35.53 0 0 1 2.045-5.7l12.964-31.533h10.92zm14.67-40.928a4.42 4.42 0 0 1-3.411-1.342c-.916-.726-1.425-1.85-1.366-3.016-.13-1.18.393-2.336 1.366-3.016a6.12 6.12 0 0 1 3.411-1.342 4.42 4.42 0 0 1 3.411 1.342c.916.726 1.425 1.85 1.366 3.016.13 1.18-.393 2.336-1.366 3.016a4.42 4.42 0 0 1-3.411 1.342zm3.75 40.928h-7.848V48.785h7.848zm35.132-1.333c-2.732 1.674-6.142 2.37-9.893 2.37-5.116 0-9.214-1.674-12.285-4.698s-4.737-7.042-4.737-12.08c0-5.7 1.705-10.066 5.116-13.422s7.848-5.03 13.643-5.03a20.88 20.88 0 0 1 8.187 1.674v7.027a13.67 13.67 0 0 0-7.508-2.684c-3.4 0-6.142 1.003-8.187 3.355a12.41 12.41 0 0 0-3.071 8.685c0 3.355 1.026 6.37 3.07 8.385 2.108 2.014 4.934 3.1 7.848 3.016 2.892-.038 5.675-1.108 7.848-3.016v6.42zm27.634-25.155c-1.237-.725-2.658-1.073-4.1-1.003-2.37 0-4.1 1.003-5.803 3.016s-2.37 4.737-2.37 8.385V82.68h-7.848V48.785h7.848v7.042a13.52 13.52 0 0 1 3.41-5.7c1.492-1.347 3.446-2.068 5.456-2.013a6.91 6.91 0 0 1 3.071.671zm20.8 27.522c-5.456 0-9.553-1.674-12.632-4.698s-4.737-7.382-4.737-12.4c0-5.7 1.705-10.066 5.116-13.422s7.848-4.737 13.303-4.737 9.553 1.674 12.632 4.737 4.398 7.358 4.398 13.058c.144 4.805-1.55 9.484-4.737 13.082-3.813 2.95-8.523 4.5-13.343 4.4zm.34-29.52q-4.603 0-7.16 3.016c-1.705 2.013-2.732 5.03-2.732 8.685s1.026 6.37 2.732 8.385 4.1 3.016 7.16 3.016 5.456-1.003 7.16-3.016 2.37-4.698 2.37-8.685c0-3.687-.68-6.7-2.37-8.685a9.86 9.86 0 0 0-7.161-2.684zm23.204 27.483V74.6c3.07 2.013 6.142 3.355 9.553 3.355q7.16 0 7.16-4.026a4.71 4.71 0 0 0-.68-2.013c-.406-.622-1.005-1.093-1.705-1.342-.763-.394-1.555-.73-2.37-1.003l-3.07-1.003a40.31 40.31 0 0 1-3.75-1.674 18.9 18.9 0 0 1-2.732-2.013 7.29 7.29 0 0 1-1.705-2.684 9.78 9.78 0 0 1-.679-3.355 9.16 9.16 0 0 1 1.026-4.358 6.64 6.64 0 0 1 3.071-3.016c1.366-1.003 2.732-1.342 4.437-2.013a26.75 26.75 0 0 1 5.116-.671 22.78 22.78 0 0 1 8.527 1.342v6.72a13.77 13.77 0 0 0-8.187-2.369 6.76 6.76 0 0 0-2.732.332c-.68.332-1.366.332-2.045.67-.607.26-1.094.74-1.366 1.342-.274.513-.392 1.095-.34 1.674a4.19 4.19 0 0 0 .339 2.013 2.63 2.63 0 0 0 1.366 1.342c.763.394 1.555.73 2.37 1.003 1.026.332 1.705.67 3.07 1.003a21.08 21.08 0 0 0 4.082 1.674c1.366.332 2.045 1.342 3.07 2.013a18.64 18.64 0 0 1 2.045 2.684 11.89 11.89 0 0 1 .68 3.687c0 1.674-.34 3.355-1.366 4.358a8.73 8.73 0 0 1-3.063 3.048 33.58 33.58 0 0 1-4.737 2.013c-5.165 1.304-10.626.707-15.388-1.682zm47.433 2.037c-5.456 0-9.553-1.674-12.632-4.698s-4.737-7.382-4.737-12.4c0-5.7 1.705-10.066 5.116-13.422s7.848-4.737 13.303-4.737 9.553 1.674 12.632 4.737 4.437 7.382 4.437 13.082c.144 4.805-1.55 9.484-4.737 13.082a21.75 21.75 0 0 1-13.422 4.366zm.34-29.52q-4.603 0-7.16 3.016c-1.705 2.013-2.732 5.03-2.732 8.685s1.026 6.37 2.732 8.385 4.1 3.016 7.16 3.016 5.456-1.003 7.16-3.016 2.37-4.698 2.37-8.685c0-3.687-.68-6.7-2.37-8.685a9.86 9.86 0 0 0-7.177-2.74zm44.663-15.12a6.97 6.97 0 0 0-3.75-1.003c-3.75 0-5.803 2.013-5.803 6.37v4.7h7.848v6.04h-7.848v27.862h-7.816v-27.87h-5.803v-6.04h5.803v-5.37c0-3.687 1.026-6.37 3.4-8.385a14.68 14.68 0 0 1 13.303-2.37v6.04h.655zm22.534 43.273q-2.045 1.003-6.142 1.003c-6.82 0-9.893-3.016-9.893-9.395V54.825h-5.803v-6.04h5.803v-7.72l7.848-2.013v10.066h8.187v6.04h-8.187v16.8a7.51 7.51 0 0 0 1.026 4.358c.68 1.003 2.045 1.342 3.75 1.342a5.8 5.8 0 0 0 3.4-1.042v5.7zm-244.204 70h-8.874l-4.437-12.072h-19.106l-4.1 12.08h-8.866l18.08-47.3h8.85zm-15.356-18.45l-6.82-18.782a21.09 21.09 0 0 1-.679-3.016 21.09 21.09 0 0 1-.679 3.016l-6.482 18.782zm46.44-12.097l-18.427 24.475h18.42v6.04h-29.37v-2.96l19.114-24.846h-17.053v-6.04h27.633v3.332zm36.8 30.547h-7.848v-5.36a11.44 11.44 0 0 1-10.579 6.04c-8.187 0-12.285-4.698-12.285-14.424V118.45h7.848v19.454q0 9.056 7.16 9.056a7.55 7.55 0 0 0 5.803-2.369 10.69 10.69 0 0 0 2.369-6.711v-19.43h7.84zm30.024-26.497c-1.237-.725-2.658-1.073-4.1-1.003-2.37 0-4.1 1.003-5.803 3.016s-2.37 4.737-2.37 8.385v16.106h-7.848V118.45h7.848v7.042a13.52 13.52 0 0 1 3.41-5.7c1.478-1.334 3.4-2.054 5.4-2.013a6.91 6.91 0 0 1 3.071.671zm34.794 11.74h-23.535c0 3.016 1.026 5.7 3.07 7.382 1.705 1.674 4.437 2.684 7.848 2.684a16.28 16.28 0 0 0 10.264-3.355v6.04q-4.642 3.04-12.316 3.04a16.06 16.06 0 0 1-11.937-4.737c-3.07-3.016-4.437-7.382-4.437-13.082a17.89 17.89 0 0 1 4.737-12.751 15.61 15.61 0 0 1 11.937-5.037c4.737 0 8.187 1.342 10.92 4.358s3.75 7.042 3.75 12.4zm-7.508-5.37c0-2.684-.68-5.03-2.045-6.37a6.44 6.44 0 0 0-5.456-2.37 7.55 7.55 0 0 0-5.803 2.369c-1.705 1.674-2.37 3.687-2.732 6.37z"/><path d="M125.193 37.43l-25.44 51.237 44.8 51.912-83.13 9.437 128.994 1.35zm-5.017-20.226L61.77 66.082l-43.357 73.15 36.907-3.7z" fill-rule="evenodd"/></g></svg>
        </Link>
        <Link to='/aws' className='svga' style={divStyle2}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#252f3e" d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z M7.045,23.979c0.527,0,1.07-0.097,1.644-0.29c0.575-0.193,1.086-0.548,1.517-1.032c0.255-0.306,0.447-0.645,0.543-1.032 c0.096-0.387,0.16-0.855,0.16-1.403v-0.677c-0.463-0.113-0.958-0.21-1.469-0.274c-0.511-0.064-1.006-0.097-1.501-0.097 c-1.07,0-1.852,0.21-2.379,0.645s-0.782,1.048-0.782,1.854c0,0.758,0.192,1.322,0.591,1.709 C5.752,23.786,6.311,23.979,7.045,23.979z M19.865,25.721c-0.287,0-0.479-0.048-0.607-0.161c-0.128-0.097-0.239-0.322-0.335-0.629 l-3.752-12.463c-0.096-0.322-0.144-0.532-0.144-0.645c0-0.258,0.128-0.403,0.383-0.403h1.565c0.303,0,0.511,0.048,0.623,0.161 c0.128,0.097,0.223,0.322,0.319,0.629l2.682,10.674l2.49-10.674c0.08-0.322,0.176-0.532,0.303-0.629 c0.128-0.097,0.351-0.161,0.639-0.161h1.277c0.303,0,0.511,0.048,0.639,0.161c0.128,0.097,0.239,0.322,0.303,0.629l2.522,10.803 l2.762-10.803c0.096-0.322,0.208-0.532,0.319-0.629c0.128-0.097,0.335-0.161,0.623-0.161h1.485c0.255,0,0.399,0.129,0.399,0.403 c0,0.081-0.016,0.161-0.032,0.258s-0.048,0.226-0.112,0.403l-3.847,12.463c-0.096,0.322-0.208,0.532-0.335,0.629 s-0.335,0.161-0.607,0.161h-1.373c-0.303,0-0.511-0.048-0.639-0.161c-0.128-0.113-0.239-0.322-0.303-0.645l-2.474-10.4 L22.18,24.915c-0.08,0.322-0.176,0.532-0.303,0.645c-0.128,0.113-0.351,0.161-0.639,0.161H19.865z M40.379,26.156 c-0.83,0-1.66-0.097-2.458-0.29c-0.798-0.193-1.421-0.403-1.836-0.645c-0.255-0.145-0.431-0.306-0.495-0.451 c-0.064-0.145-0.096-0.306-0.096-0.451v-0.822c0-0.339,0.128-0.5,0.367-0.5c0.096,0,0.192,0.016,0.287,0.048 c0.096,0.032,0.239,0.097,0.399,0.161c0.543,0.242,1.133,0.435,1.756,0.564c0.639,0.129,1.261,0.193,1.9,0.193 c1.006,0,1.788-0.177,2.331-0.532c0.543-0.355,0.83-0.871,0.83-1.532c0-0.451-0.144-0.822-0.431-1.129 c-0.287-0.306-0.83-0.58-1.612-0.838l-2.315-0.726c-1.165-0.371-2.027-0.919-2.554-1.645c-0.527-0.709-0.798-1.499-0.798-2.338 c0-0.677,0.144-1.274,0.431-1.79s0.671-0.967,1.149-1.322c0.479-0.371,1.022-0.645,1.66-0.838C39.533,11.081,40.203,11,40.906,11 c0.351,0,0.718,0.016,1.07,0.064c0.367,0.048,0.702,0.113,1.038,0.177c0.319,0.081,0.623,0.161,0.91,0.258s0.511,0.193,0.671,0.29 c0.224,0.129,0.383,0.258,0.479,0.403c0.096,0.129,0.144,0.306,0.144,0.532v0.758c0,0.339-0.128,0.516-0.367,0.516 c-0.128,0-0.335-0.064-0.607-0.193c-0.91-0.419-1.932-0.629-3.065-0.629c-0.91,0-1.628,0.145-2.123,0.451 c-0.495,0.306-0.75,0.774-0.75,1.435c0,0.451,0.16,0.838,0.479,1.145c0.319,0.306,0.91,0.613,1.756,0.887l2.267,0.726 c1.149,0.371,1.98,0.887,2.474,1.548s0.734,1.419,0.734,2.257c0,0.693-0.144,1.322-0.415,1.87 c-0.287,0.548-0.671,1.032-1.165,1.419c-0.495,0.403-1.086,0.693-1.772,0.903C41.943,26.043,41.193,26.156,40.379,26.156z"/><path fill="#f90" d="M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21 c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806c0.575,0.726-0.16,5.708-2.969,8.094 c-0.431,0.371-0.846,0.177-0.655-0.306C44.833,35.927,46.254,32.331,45.583,31.477z"/></svg>
        </Link>
      </div>
      
      <Routes>
        <Route path="/" element={<FileList cloud='' />} />
        <Route path="/google-drive" element={<FileList cloud='Google Drive' />} />
        <Route path="/microsoft-azure" element={<FileList cloud='Microsoft Azure' />} />
        <Route path="/aws" element={<FileList cloud='AWS' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;