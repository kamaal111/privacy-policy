import Head from "next/head";

import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div>
      <Head>
        <title>Privacy and Terms</title>
      </Head>
      <main>
        <h1>Privacy Policy</h1>
        <p>
          This policy applies to all information collected or submitted on
          Kamaal's apps for iPhone, iPad and Mac.
        </p>
        <p>
          This page is used to inform visitors regarding my policies with the
          collection, use, and disclosure of Personal Information if anyone
          decided to use my Service.
        </p>
        <p>
          If you choose to use my Service, then you agree to the collection and
          use of information in relation to this policy. The Personal
          Information that I collect is used for providing and improving the
          Service. I will not use or share your information with anyone except
          as described in this Privacy Policy.
        </p>
        <h2>Information Collection and Use</h2>
        <p>
          For a better experience, while using our Service, I may require you to
          provide us with certain personally identifiable information. The
          information that I request will be retained on your device and is not
          collected by me in any way.
        </p>
        <p>
          The app does use third party services that may collect information
          used to identify you.
        </p>
        <h2>Log Data</h2>
        <p>
          I want to inform you that whenever you use my Service, in a case of an
          error in the app I collect data and information (through third party
          products) on your phone called Log Data. This Log Data may include
          information such as your device Internet Protocol (“IP”) address,
          device name, operating system version, the configuration of the app
          when utilizing my Service, the time and date of your use of the
          Service, and other statistics.
        </p>
        <h2>Changes to This Privacy Policy</h2>
        <p>
          I may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. I will
          notify you of any changes by posting the new Privacy Policy on this
          page. These changes are effective immediately after they are posted on
          this page.
        </p>
        <h2>Contact Us</h2>
        <p>
          {`If you have any questions or suggestions about my Privacy Policy, do
          not hesitate to contact me at `}
          <a href="mailto:app.kamaal@gmail.com?Subject=Hello" target="_top">
            app.kamaal@gmail.com.
          </a>
        </p>
        <h1>Terms and Conditions</h1>
        <h3>Last updated: September 21th 2020</h3>
        <p>
          Please read these Terms and Conditions ("Terms", "Terms and
          Conditions") carefully before using the Color Selector / Iron Buddy.
          Your access to and use of the Service is conditioned on your
          acceptance of and compliance with these Terms. These Terms apply to
          all visitors, users and others who access or use the Service. By
          accessing or using the Service you agree to be bound by these Terms.
          If you disagree with any part of the terms then you may not access the
          Service.
        </p>
        <h2>Subscriptions</h2>
        <p>
          Some parts of the Service are billed on a subscription basis. To find
          out more about subscriptions, check the Subscriptions page inside the
          apps.
        </p>
        <h2>Content</h2>
        <p>
          The Service allows you to use the apps (Color Selector and Iron Buddy)
          for the use it was intended for. You are responsible for the data you
          create and share.
        </p>
        <h2>Links To Other Web Sites</h2>
        <p>
          The Service may contain links to third-party web sites or services
          that are not owned or controlled by me (iCloud for example). I have no
          control over, and assume no responsibility for, the content, privacy
          policies, or practices of any third party web sites or services. You
          further acknowledge and agree that I shall not be responsible or
          liable, directly or indirectly, for any damage or loss caused or
          alleged to be caused by or in connection with use of or reliance on
          any such content, goods or services available on or through any such
          web sites or services.
        </p>
        <h2>Changes</h2>
        <p>
          I reserve the right, at my sole discretion, to modify or replace these
          Terms at any time. If a revision is material I will try to provide at
          least 30 days' notice prior to any new terms taking effect. What
          constitutes a material change will be determined at our sole
          discretion.
        </p>
        <h2>Contact Us</h2>
        <p>
          {`If you have any questions or suggestions about my Privacy Policy, do
          not hesitate to contact me at `}
          <a href="mailto:app.kamaal@gmail.com?Subject=Hello" target="_top">
            app.kamaal@gmail.com.
          </a>
        </p>
      </main>

      <footer></footer>
    </div>
  );
}

export default Home;
