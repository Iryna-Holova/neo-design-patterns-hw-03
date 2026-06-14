import { PaymentProviderFactory } from '../../core/PaymentProviderFactory';
import { PaypalPaymentProvider } from './PaypalPaymentProvider';

export class PaypalFactory implements PaymentProviderFactory {
  createPaymentProvider() {
    return new PaypalPaymentProvider();
  }
}
