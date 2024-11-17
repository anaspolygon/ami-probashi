export const endpoint = {
  // registration
  bmetCardDownload: "/download/bmet-card",
  bmetSmartCardDownload: "/download/clearance-card",
  pdoCertificateDownload: "/download/pdo-certificate",
  pdoEnrollmentCard: "/download/pdo-enrollment",
  houseKeepingCertificateDownload: "/download/house-keeping-certificate",
  generalTrainingCertificateDownload: "/download/training-certificate",
  bmetSmartCardVerify: "/download/clearance-verify",
  bmetSmartCardTracking: "/download/clearance-track",
  smartCardTrack: "/download/clearance-track",
  generalTrainingEnrollment: "/download/training-enrollment",
};

// header

export const servicesGoverment = {
  bmetRegistration: "/services/govt-service#bmet_migrant_database_registration",
  pdo: "/services/govt-service#pre_departure_orientation",
  generalTraining: "/services/govt-service#get_trained_get_hired",
  bmetClearanceSmartCard:
    "/services/govt-service#swift_secure_emigration_clearance",
};
export const servicesJob = {
  findJob: "/services/job-training#verified_jobs",
  makeJob: "/services/job-training#cv_builder",
  takeCareerConsultancy: "/services/career",
};
export const servicesLifeStyle = {
  onlineDoctor: "/services/lifestyle#online_doctor",
  entertainment: "/services/lifestyle#entertainment",
  eLearning: "/services/lifestyle#e_learning",
};
export const brac = {
  returneeMigrants: "/services/brac#expert_career_consultancy",
  overseasEmployment: "/services/job-training",
};

export const bracMenu = {
  returneeMigrants: "/services/brac#skill_training",
  overseasEmployment: "/services/brac#job_abroad",
};

export const recruitmentForeignEmployers = {
  talentJob: "/services/foreign-employer#talent_pool",
  postJob: "/services/foreign-employer#broadcast_jobs",
  videoInterview: "/services/foreign-employer#video_interviews",
  connectLocalRecruitingAgency:
    "/services/foreign-employer#local_recruiting_agencies",
  governmentCompliance: "/services/foreign-employer#government_compliance",
};
export const recruitmentLocalEmployers = {
  talentPool: "/services/local-recrute#talent_pool",
  postJob: "/services/foreign-employer#post_manage_jobs",
  videoInterview: "/services/foreign-employer#video_interviews",
  governmentProcess: "/services/foreign-employer#government_compliance",
};
export const recruitmentLocalEmployersMenu = {
  postJob: "/services/local-recrute#post_manage_jobs",
  videoInterview: "/services/local-recrute#video_interviews",
};
export const recruitmentTrainingInstitute = {
  broadcastCourses: "/services/training-institute#broadcast_courses",
  onlineEnrollment: "/services/training-institute#online_enrollment",
  digitalAttendance: "/services/training-institute#digital_attendance",
};

export const government = {
  moewoeAndBmet: "/services/moewoe-bmet",
  ttc: "/services/training-center",
  unionDigitalCenters: "/services/union-center",
  airportEmigration: "/services/airport-emigration",
  demoOffices: "/services/demo-office",
};

export const portalsGovernmentPortal = {
  bmet: "https://moewoe.amiprobashi.com/login?type=bmet",
  ttc: "https://moewoe.amiprobashi.com/login?type=ttc",
  demoOffice: "https://moewoe.amiprobashi.com/login?type=bmet",
  bimt: "https://moewoe.amiprobashi.com/login?type=bmet",
};

export const portalsRecruitmentPortal = {
  recruitingAgency: "https://moewoe.amiprobashi.com/login?type=bra",
  foreignEmployer: "https://moewoe.amiprobashi.com/login?type=fra",
  raAccountRequest: "https://moewoe.amiprobashi.com/register",
};

export const downloadTabs = {
  "download-bmet.html": 0,
  "download-clearance.html": 1,
  "Verify-Smart-Clearance-Card": 2,
  "Track-Clearance-Application": 3,
  "Download-PDO-Certificate": 4,
  "Download-Training-Certificate": 5,
};

const downloadKeys = Object.keys(downloadTabs);

export const downloadCardsBmetService = {
  bmetRegistration: `/${downloadKeys[0]}`,
  bmetSmartCard: `/${downloadKeys[1]}`,
  trackApplication: `/${downloadKeys[3]}`,
  verifySmartCard: `/${downloadKeys[2]}`,
};

export const downloadCardsTrainingCertificate = {
  downloadGeneralCertificate: `/${downloadKeys[5]}?action_type=general`,
  downloadHouseKeepingCertificate: `/${downloadKeys[5]}?action_type=housekeeping`,
  downloadEnrollmentCardGeneralHousekeeping: `/${downloadKeys[5]}?action_type=download`,
};

export const downloadCardsPdo = {
  downloadEnrollmentCard: `/${downloadKeys[4]}?action_type=enrollment`,
  downloadPdoCertificateCard: `/${downloadKeys[4]}?action_type=download`,
};

export const recruitFromBangladesh = {
  localEmployers: "https://moewoe.amiprobashi.com/login?type=bra",
  foreignEmployers: "https://moewoe.amiprobashi.com/login?type=bra",
  trainingInstitutes: "https://moewoe.amiprobashi.com/login?type=ttc",
};

export const footer = {
  findJob: "/services/job-training#verified_jobs",
  makeCV: "/services/job-training#cv_builder",
  careerConsultancy: "/services/career",
  connectLocalRecruitingAgency: "/services/local-recrute",
  foreignEmployers: "/services/foreign-employer",
  trainingInstitute: "/services/training-institute",
  onlineDoctor: "/services/lifestyle#online_doctor",
  aboutUs: "/about",
  contactUs: "#",
  faq: "#",
  siteMap: "/site-map.html",
  privacyPolicy: "/privacy-policy",
  refundPolicy: "/refund-policy",
  termsAndConditions: "/terms-conditions",
};

export const socials = {
  appStore: "https://apps.apple.com/us/app/ami-probashi/id1626946419",
  playStore:
    "https://play.google.com/store/apps/details?id=com.thane.amiprobashi&hl=en&gl=US",
  facebook: "https://www.facebook.com/AmiProbashiApp/",
  in: "https://www.linkedin.com/company/amiprobashi/",
  youtube: "https://youtube.com/channel/UC0uYpXSTsj8UqAs9zLtxjfw",
  instagram: "https://instagram.com/amiprobashi_official",
};

export const homeSlider = {
  sliderOne: {
    appStore: "https://apps.apple.com/us/app/ami-probashi/id1626946419",
    playStore:
      "https://play.google.com/store/apps/details?id=com.thane.amiprobashi&hl=en&gl=US",
    downloadQr: `/${downloadKeys[1]}`,
    verifySmartCard: `/${downloadKeys[2]}`,
  },
  sliderTwo: {
    appStore: "https://apps.apple.com/us/app/ami-probashi/id1626946419",
    playStore:
      "https://play.google.com/store/apps/details?id=com.thane.amiprobashi&hl=en&gl=US",
    login: "https://moewoe.amiprobashi.com/login?type=bra ",
  },
  sliderThree: {
    appStore: "https://apps.apple.com/us/app/ami-probashi/id1626946419",
    playStore:
      "https://play.google.com/store/apps/details?id=com.thane.amiprobashi&hl=en&gl=US",
    login: "https://moewoe.amiprobashi.com/login?type=bmet",
  },
};

export const governmentStakeholders = {
  bmetService: {
    learnMore: "/services/moewoe-bmet",
    portal: "https://moewoe.amiprobashi.com/login?type=bmet",
  },
  ttc: {
    learnMore: "/services/training-center",
    portal: "https://moewoe.amiprobashi.com/login?type=ttc",
  },
  unionDigitalCenters: {
    learnMore: "/services/union-center",
    portal: "https://moewoe.amiprobashi.com/login?type=bmet",
  },
  airportEmigration: {
    learnMore: "/services/airport-emigration",
    portal: "https://moewoe.amiprobashi.com/login?type=bmet",
  },
  demoOffices: {
    learnMore: "/services/demo-office",
    portal: "https://moewoe.amiprobashi.com/login?type=bmet",
  },
};
export const migrantWorkers = {
  governmentServices: {
    bmetService: "/services/govt-service#bmet_migrant_database_registration",
    pdo: "/services/govt-service#pre_departure_orientation",
    generalTraining: "/services/govt-service#get_trained_get_hired",
    bmetClearanceSmartCard:
      "/services/govt-service#swift_secure_emigration_clearance",
  },
  bracServices: {
    returneeMigrants: "/services/brac#expert_career_consultancy",
    skillTraining: "/services/brac#skill_training",
    jobAbroad: "/services/brac#job_abroad",
  },
  jobTraining: {
    verifyJob: "/services/job-training#verified_jobs",
    authenticEmployer: "/services/job-training#authentic_employers",
    cvBuilder: "/services/job-training#cv_builder",
    skillDevelopment: "/services/govt-service#get_trained_get_hired",
  },
  careerConsultancy: {
    careerConsultancy: "/services/career#expert_career_consultancy",
    cvBuilder: "/services/career#consultant_craft_cv",
    videoInterview: "/services/career#video_interview_employers",
  },
  lifestyle: {
    onlineDoctor: "/services/lifestyle#online_doctor",
    elearning: "/services/lifestyle#e_learning",
    enternainment: "/services/lifestyle#entertainment",
    bankAccount: "/services/lifestyle#open_bank_account",
  },
};
export const probashiApp = {
  bmetRegistration: "/services/govt-service#bmet_migrant_database_registration",
  pdo: "/services/govt-service#pre_departure_orientation",
  generalTraining: "/services/govt-service#get_trained_get_hired",
  bmetClearanceSmartCard: "/services/govt-service#get_trained_get_hired",
  verifyJob: "/services/job-training#verified_jobs",
};

export const footerBottomLinks = {
  siteMap: "/site-map",
  privacyPolicy: "/privacy-policy",
  refundPolicy: "/refund-policy",
  termsAndConditions: "/terms-conditions",
};

export const media = {
  blog: process.env.NEXT_PUBLIC_WORDPRESS_BLOG_URL ?? "",
  article: process.env.NEXT_PUBLIC_WORDPRESS_ARTICLE_URL ?? "",
  videoGallery: process.env.NEXT_PUBLIC_WORDPRESS_VIDEO_GALLERY_URL ?? "",
  photoGallery: process.env.NEXT_PUBLIC_WORDPRESS_PHOTO_GALLERY_URL ?? "",
};

export const wordpress = {
  imageDomainName: "ami-probashi-wp.dev-polygontech.xyz",
  blogUrl: "https://ami-probashi-wp.dev-polygontech.xyz/blog/",
  articleUrl: "https://ami-probashi-wp.dev-polygontech.xyz/article/",
  videoGalleryUrl: "https://ami-probashi-wp.dev-polygontech.xyz/video-gallery/",
  photoGalleryUrl:
    "https://ami-probashi-wp.dev-polygontech.xyz/photo-gallery-2/",
  blogEnApi:
    "https://ami-probashi-wp.dev-polygontech.xyz/index.php/wp-json/wp/v2/posts?per_page=3&categories=29&status=publish",
  blogBnApi:
    "https://ami-probashi-wp.dev-polygontech.xyz/index.php/wp-json/wp/v2/posts?per_page=3&categories=58&status=publish",
  articleEnApi:
    "https://ami-probashi-wp.dev-polygontech.xyz/index.php/wp-json/wp/v2/wporg_article?per_page=4&categories=32&status=publish",
  articleBnApi:
    "https://ami-probashi-wp.dev-polygontech.xyz/index.php/wp-json/wp/v2/wporg_article?per_page=4&categories=56&status=publish",
};

const cmsURl = process.env.NEXT_PUBLIC_CMS_API_URL;

export const getCmsUrl = (path: string) => {
  return cmsURl + path;
};
