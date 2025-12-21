import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactRequest = await req.json();

    console.log("Received contact form submission:", { name, email });

    // Send notification email to Chakradhar
    const notificationResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["chakradhar.gunnam@gmail.com"],
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: #ffffff; border-radius: 16px;">
          <h1 style="color: #00d4ff; margin-bottom: 24px; font-size: 28px;">📬 New Portfolio Contact</h1>
          
          <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
            <p style="margin: 8px 0; font-size: 16px;"><strong style="color: #00d4ff;">From:</strong> ${name}</p>
            <p style="margin: 8px 0; font-size: 16px;"><strong style="color: #00d4ff;">Email:</strong> ${email}</p>
          </div>
          
          <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 12px;">
            <h3 style="color: #00d4ff; margin-bottom: 12px;">Message:</h3>
            <p style="line-height: 1.6; font-size: 15px; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="margin-top: 24px; color: #888; font-size: 12px; text-align: center;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationResponse);

    // Send confirmation email to the sender
    const confirmationResponse = await resend.emails.send({
      from: "Chakradhar Chowdary <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for reaching out!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: #ffffff; border-radius: 16px;">
          <h1 style="color: #00d4ff; margin-bottom: 24px; font-size: 28px;">Thank You, ${name}! 🚀</h1>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            I've received your message and will get back to you as soon as possible.
          </p>
          
          <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
            <h3 style="color: #00d4ff; margin-bottom: 12px;">Your Message:</h3>
            <p style="line-height: 1.6; font-size: 14px; color: #ccc; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6;">
            In the meantime, feel free to connect with me on 
            <a href="https://www.linkedin.com/in/chakradhar-chowdary-gunnam-910070333" style="color: #00d4ff;">LinkedIn</a>.
          </p>
          
          <p style="margin-top: 24px; font-size: 14px;">
            Best regards,<br/>
            <strong style="color: #00d4ff;">Chakradhar Chowdary</strong><br/>
            Software Developer
          </p>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
